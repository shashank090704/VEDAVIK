import { connect } from "@/lib/dbconnect";
import ordermodel from "@/models/order";

import { NextResponse } from "next/server";

connect()
export async function POST(request) {
   const reqbody = await request.json();
   const {senderId , orderId} = reqbody;
   const order = await ordermodel.findById(orderId);


   if( order.isaccepted == false && order.farmerid == null){
      
    const result = await ordermodel.updateOne({ _id: orderId }, { $set: { farmerid : senderId  , isaccepted : true}  });

   }

   return NextResponse.json({mess : "ordser confirmed"})


}