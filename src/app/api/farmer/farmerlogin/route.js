import { connect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import farmermodel from "@/models/farmer";
import bycrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

connect()
export async function POST(request) {
    try {
        const reqbody = await request.json();
        console.log(reqbody , "reqbody");
        const { phone , password} = reqbody;
        console.log( phone);
        const farmer = await farmermodel.findOne({phonenumber : phone});
        console.log( farmer , "model");
        if(!farmer){
          return NextResponse.redirect("/Farmersignup");
        }
        const validpass = bycrypt.compare( password , farmer.password);
        if( !validpass){
            return NextResponse.json({message : "wrong password"})
        }

        const tokendata = {
            farmerphone : farmer.phonenumber,
            id : farmer._id
        }
        const token = await jwt.sign(tokendata , process.env.TOKEN_SECREAT,{expiresIn : '1d'} );
         
        const response = NextResponse.json({message : "login sucess fully"})

        response.cookies.set("farmertoken", token , {httpOnly : true})
        return response;

        
    } catch (error) {
        return NextResponse.json({err : error});
    }
}