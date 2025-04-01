import { Getdatafrmtf } from "@/helper/getdatafromtokenfarmer";
import { connect } from "@/lib/dbconnect";
import farmermodel from "@/models/farmer";
import { NextResponse } from "next/server";
connect()

export async function POST(request) {
    try {
        const farmid = await Getdatafrmtf(request);
        console.log(farmid , "farmer id");
        if( farmid != null){
        const farmer = await farmermodel.findById(farmid);
        console.log(farmer);
         return NextResponse.json({
            message : "user found",
            data : farmer
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
