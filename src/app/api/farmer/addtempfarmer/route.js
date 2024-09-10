import ordermodel from "@/models/order";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

connect()

export async function POST(request){
   
    try {
        const reqbody = await request.json();
        console.log(reqbody , "reqbody");
        const { orderid, tempfarmid} = reqbody;
       
        const order = await ordermodel.findById(orderid);
        const isPresent = order.includes(tempfarmid);
        if(isPresent){
            return NextResponse.json({messsage : "farmer alreday present"})
        }
        order.tempfarmer.push(tempfarmid);
        await order.save();
        return NextResponse.json({message : "temp farmer save"})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "temp farmer save"})
    }
}