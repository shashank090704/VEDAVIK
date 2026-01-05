import { connect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import farmermodel from "@/models/farmer";
import bycrypt from "bcryptjs"
connect()
export async function POST(request) {
    try {
        const reqbody =  await request.json();
        console.log(reqbody);
        const { name , phone , area , email, city ,password } = reqbody;
       console.log(name);

       


        const farmer = await farmermodel.findOne({
             $or: [
        { email: email },
        { phonenumber: phone }
      ]
        });
        if(farmer){
            console.log("farmer already present" , farmer)
            return NextResponse.json({error : 'user alredy exisy'}, {status : 400})
        }else{
            console.log("no farmer")
        }
        const salt = await bycrypt.genSalt(10);
        const hashedpass = await bycrypt.hash( password , salt);

        const newfarmer = new farmermodel({
            name : name,
            phonenumber : phone,
            email : email ,
            password : hashedpass,
            area : area ,
            city : city
            
            

        })
        const savedfarmer = await newfarmer.save()
        

        return NextResponse.json({
            message : "new farmer saves"
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({error : error});
    }



}
