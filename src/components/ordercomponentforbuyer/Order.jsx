'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'


function Order (props) {
   const router = useRouter();
    const tempfarmId = props.tempfarmer;
    const buyerId = props.order.buyerid;
   
    const contact = async()=>{
         console.log( tempfarmId , "receiver id")
         console.log( buyerId , "sender id")
        await localStorage.setItem('myData', JSON.stringify({ senderId: buyerId, receiverId: tempfarmId}));
        router.push('/Chating')
    }

  return (
    <>
    
    <button onClick={contact}> contact buyer</button>
    </>
  )
}

export default Order