import { connect } from "@/lib/dbconnect";
import ordermodel from "@/models/order";

import { NextResponse } from "next/server";

connect()
export async function POST(request) {
 try {
    const orders = await ordermodel.find({iscompleted : false});
    return NextResponse.json({orders});
 } catch (error) {
    console.log(error);
    return NextResponse.json({ message : " some thing went wrong"});
 }


}