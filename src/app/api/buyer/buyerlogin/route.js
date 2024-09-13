import { connect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import buyerrmodel from "@/models/buyer";
import bycrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

connect()
export async function POST(request) {
    try {
        const reqbody = await request.json();
        console.log(reqbody , "reqbody");
        const { phone , password} = reqbody;
        console.log( phone);
        const buyer = await buyerrmodel.findOne({phonenumber : phone});
        console.log( buyer , "model");
        if(!buyer){
          return NextResponse.redirect("/buyersignup");
        }
        const validpass = await bycrypt.compare( password , buyer.password);
        if( !validpass){
            return NextResponse.json({message : "wrong password"})
        }

        const tokendata = {
            buyerphone : buyer.phonenumber,
            id : buyer._id
        }
        const token = await jwt.sign(tokendata , process.env.TOKEN_SECREAT,{expiresIn : '1d'} );
         
        const response = NextResponse.json({message : "login sucess fully"})

        response.cookies.set("buyertoken", token , {httpOnly : true})
        return response;

        
    } catch (error) {
        return NextResponse.json({err : error});
    }
}