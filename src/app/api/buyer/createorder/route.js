import { connect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import ordermodel from "@/models/order";
import { Getdatafrmtb } from "@/helper/getdatafromtokenbuyer";


connect()
export async function POST(request) {
    try {

        const reqbody = await request.json();
        console.log(reqbody);
        const { cropName, duration, amountPerKg, quantity, city } = reqbody;
        console.log(cropName);
        const buyid = await Getdatafrmtb(request);



        const neworder = new ordermodel({
            name: cropName,
            duration: duration,
            amount: amountPerKg,
            quantity: quantity,
            city: city,
            buyerid : buyid


        })
        const savedorder = await neworder.save();


        return NextResponse.json({
            message: "new farmer saves"
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error });
    }



}