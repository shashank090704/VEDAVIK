'use client'
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Order (props) {
    const navigate = useNavigate();
    const tempfarmid = props.farmerid;
    const buyerid = props.order.buyerid;
    const orderid = props.order._id;

    const senddata = async()=>{
        const res =  await axios.post("/api/farmer/addtempfarmer" , {orderid, tempfarmid});
        console.log(res);
    }
    const contact = async()=>{
        await senddata;
        navigate('/Chating' , { state : { senderId : tempfarmid , receiverId : buyerid}})
    }

  return (
    <>
    
    <button onClick={contact}> contact buyer</button>
    </>
  )
}

export default Order