import { connect } from "@/lib/dbconnect";
import ordermodel from "@/models/order";
import mongoose from "mongoose";

import { NextResponse } from "next/server";

connect()

export async function POST(request){
   
    try {
        const reqbody = await request.json();
        console.log(reqbody , "reqbody");
        const { orderId, tempFarmId} = reqbody;
       console.log( orderId , "orderid")
       console.log(tempFarmId , "temp")
        const order = await ordermodel.findById(orderId);
        console.log(order , "order")
        const isPresent = order.tempfarmid.includes(tempFarmId);
        console.log(isPresent);
        if(isPresent){
            return NextResponse.json({messsage : "farmer alreday present"})
        }

       await order.tempfarmid.push(tempFarmId);
       const savedorder = await order.save();
        console.log(savedorder , "saved order")
        return NextResponse.json({message : "temp farmer save"})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "temp farmer save"})
    }
}