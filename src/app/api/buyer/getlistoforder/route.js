import { connect } from "@/lib/dbconnect";
import ordermodel from "@/models/order";

import { NextResponse } from "next/server";

connect()
export async function POST(request) {
 try {
    const reqbody = await request.json();
    const {buyerid} = reqbody;
    console.log(buyerid , "buyer id");
    const orders = await ordermodel.find({buyerid : buyerid , iscompleted : false});
    console.log(orders , "buyer order")
    return NextResponse.json({orders});
    // return NextResponse.json({message : "hi"})
 } catch (error) {
    console.log(error);
    return NextResponse.json({ message : " some thing went wrong"});
 }


}