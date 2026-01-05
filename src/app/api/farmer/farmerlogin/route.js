// import { connect } from "@/lib/dbconnect";
// import { NextResponse } from "next/server";
// import farmermodel from "@/models/farmer";
// import bycrypt from "bcryptjs"
// import jwt from 'jsonwebtoken'

// connect()
// export async function POST(request) {
//     try {
//         const reqbody = await request.json();
//         console.log(reqbody , "reqbody");
//         const { phone , password} = reqbody;
//         console.log( phone);
//         const farmer = await farmermodel.findOne({phonenumber : phone});
//         console.log( farmer , "model");
//         if(!farmer){
//           return NextResponse.redirect("/Farmersignup");
//         }
//         const validpass = await bycrypt.compare( password , farmer.password);
//         console.log(validpass , "is valid");
//         if( !validpass){
//             return NextResponse.json({message : "wrong password"})
//         }

//         const tokendata = {
//             farmerphone : farmer.phonenumber,
//             id : farmer._id
//         }
//         const token = await jwt.sign(tokendata , process.env.TOKEN_SECREAT,{expiresIn : '1d'} );
         
//         const response = NextResponse.json({message : "login sucess fully"})

//         response.cookies.set("farmertoken", token , {httpOnly : true})
//         return response;

        
//     } catch (error) {
//         return NextResponse.json({err : error});
//     }
// }

import { connect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import farmermodel from "@/models/farmer";
import bcryptjs from "bcryptjs"; // Fixed spelling from 'bycrypt'
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
    try {
        const reqbody = await request.json();
        const { phone, password } = reqbody;

        // 1. Check if user exists
        const farmer = await farmermodel.findOne({ phonenumber: phone });
        
        if (!farmer) {
            // Do not redirect here. Return an error so frontend knows to show a message.
            return NextResponse.json({ error: "User does not exist" }, { status: 404 });
        }

        // 2. Check Password
        const validpass = await bcryptjs.compare(password, farmer.password);
        
        if (!validpass) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        // 3. Generate Token
        const tokendata = {
            farmerphone: farmer.phonenumber,
            id: farmer._id
        };

        const token = jwt.sign(tokendata, process.env.TOKEN_SECREAT, { expiresIn: '1d' }); // Ensure env variable is TOKEN_SECRET

        const response = NextResponse.json({ 
            message: "Login successful",
            success: true 
        });

        // 4. Set Cookie
        response.cookies.set("farmertoken", token, { 
            httpOnly: true,
            path: '/' 
        });

        return response;

    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}