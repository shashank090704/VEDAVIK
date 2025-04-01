import { connect } from "@/lib/dbconnect";
import ordermodel from "@/models/order";

import { NextResponse } from "next/server";


connect()
export async function POST(request) {
    try {
    const reqbody = await request.json();
    const {senderId ,orderId , tempamt } = reqbody

    console.log(tempamt)

    const result = await ordermodel.updateOne({ _id: orderId }, { $set: {amount: tempamt} });
    console.log(result)
    const res = await ordermodel.findById(orderId)
    console.log(res)
    
     return NextResponse.json({mess : "price updated" })
    } catch (error) {
        return NextResponse.json({mess : "error"})
    }
    

}