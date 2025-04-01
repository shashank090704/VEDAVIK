
import { Getdatafrmtb } from "@/helper/getdatafromtokenbuyer";
import { connect } from "@/lib/dbconnect";
import buyermodel from "@/models/buyer";

import { NextResponse } from "next/server";
connect()

export async function POST(request) {
    try {
        const buyid = await Getdatafrmtb(request);
        console.log(buyid , "buyer id");
        if(buyid != null){
        const buyer = await buyermodel.findById(buyid);
        console.log(buyer , "get buyer route  ");
         return NextResponse.json({
            message : "user found",
            data : buyer
         })
        }
        else{
        return NextResponse.json({message : "please login"})
        }
    
    } catch (error) {
        console.error(error);
    return NextResponse.json({
      message: "Error occurred",
      error: error.message
    }, { status: 500 });
    }
}