import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,      // Your Razorpay Key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Your Razorpay Secret
});

export  async function POST(req, res) {
  
    const reabody = await req.json();
    const {amount} = reabody
    //  const a = parseFloat(amount)*1000
    //  console.log(a)
    //  console.log(a);
    //  const obj = await  JSON.parse(amount)
    // console.log(amount)
    const options = {
      amount: amount,  // Razorpay expects the amount in paise (i.e., multiply by 100)
      currency: 'INR',
      receipt: `receipt_order_${Math.floor(Math.random() * 1000)}`,
    };

    try {
      const order = await razorpay.orders.create(options);
     
      return NextResponse({ status : 200 , order})
    } catch (error) {
    //   res.status(500).json({ error: 'Something went wrong' });
      return NextResponse.json( { status : 500 , error: 'Something went wrong'})
    }

}
