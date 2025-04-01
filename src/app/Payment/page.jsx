'use client'
import axios from 'axios';
// import { headers } from 'next/headers';
import { useState } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [paymentId, setPaymentId] = useState('');
  const [orderrId, setOrderrId] = useState('');
  const [signature, setSignature] = useState('');
  const [verificationResult, setVerificationResult] = useState(null); // New state to capture verification result
 const amount = '100';
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false);
      return;
    }

    // Create an order on the server
    const response = await fetch('/api/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: parseFloat(amount) *100,  // Pass the amount here
      }),
    });

    // const response = axios.post('/api/razorpay' , {amount : 500})

    const orderr = await response.json();

    if (!orderr) {
      alert('Server error. Please try again.');
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,  // Razorpay key
      amount: parseFloat(amount) * 100,
      currency: orderr.currency,
      name: 'Your Company Name',
      description: 'Test Transaction',
      order_id: orderr.id,
      handler: async function (response) {
        setPaymentId(response.razorpay_payment_id);
        setOrderrId(response.razorpay_order_id);
        setSignature(response.razorpay_signature);

        // Send payment details to backend for verification
        const verifyResponse = await fetch('/api/verifySignature', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          }),
        });

        const result = await verifyResponse.json();
        setVerificationResult(result.success ? 'Payment Verified Successfully!' : 'Payment Verification Failed.');
        if (!result.success) {
          alert('Payment verification failed. Please try again.');
        }
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };
  

  return (
    <div>
      <h1>Razorpay Integration with Payment Verification</h1>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {paymentId && (
        <div>
          <h3>Payment Details:</h3>
          <p>Payment ID: {paymentId}</p>
          <p>Order ID: {orderrId}</p>
          <p>Signature: {signature}</p>
        </div>
      )}
      {verificationResult && <p>{verificationResult}</p>}
    </div>
  );
}

