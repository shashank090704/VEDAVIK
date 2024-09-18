import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  
    const { order_id, payment_id, signature } = req.body;

    // Create a signature using the order_id and payment_id
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${order_id}|${payment_id}`)
      .digest('hex');

    // Compare the generated signature with the one sent from Razorpay
    if (generated_signature === signature) {
      // Payment verification successful
    //   res.status(200).json({ success: true });
      return NextResponse.json({status : 200 , success: true })
    } else {
      // Payment verification failed
    //   res.status(400).json({ success: false, error: 'Invalid signature' });
      return NextResponse.json({status : 400 , success: false, error: 'Invalid signature'})
    }
 
}
