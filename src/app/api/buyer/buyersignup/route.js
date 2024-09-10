import { connect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import buyermodel from "@/models/buyer";
import bycrypt from "bcryptjs"
connect()
export async function POST(request) {
    try {
        const reqbody =  await request.json();
        console.log(reqbody);
        const { name , phone  , email, city ,password } = reqbody;
       console.log(name);


        const buyer = await buyermodel.findOne({phonenumber : phone});
        if(buyer){
            console.log("farmer already present" , buyer)
            return NextResponse.json({error : 'user alredy exisy'}, {status : 400})
        }else{
            console.log("no farmer")
        }
        const salt = await bycrypt.genSalt(10);
        const hashedpass = await bycrypt.hash( password , salt);

        const newbuyer = new buyermodel({
            name : name,
            phonenumber : phone,
            email : email ,
            password : hashedpass,
            city : city
            
            

        })
        const savedbuyer = await newbuyer.save()
        

        return NextResponse.json({
            message : "new farmer saves"
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({error : error});
    }



}
