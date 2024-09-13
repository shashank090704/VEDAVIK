import { connect } from "@/lib/dbconnect";
import buyermodel from "@/models/buyer";
import farmermodel from "@/models/farmer";
import messagemodel from "@/models/message";


import { NextResponse } from "next/server";

connect()
export async function POST(request) {
 try {
    const reqbody = await request.json();
    console.log(reqbody , "reqbody")
    const { senderId , receiverId} = reqbody;
   
    const messages = await messagemodel.find({
        $or: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      }).sort({ createdAt: 1 });
  console.log(messages , "message");

  const sender = await farmermodel.findById(senderId) || await buyermodel.findById(receiverId);
  const receiver = await farmermodel.findById(senderId) || await buyermodel.findById(receiverId);

  console.log( sender , "sender in intial measage")
  console.log(  receiver, "receiver in intial measage")

    return NextResponse.json({ data : messages , sender : sender , receiver : receiver});
    // return NextResponse.json({message : "hi"})
 } catch (error) {
    console.log(error);
    return NextResponse.json({ message : " some thing went wrong"});
 }


}