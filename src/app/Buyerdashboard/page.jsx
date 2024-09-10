// 'use client'
// import React, { useEffect, useState } from 'react'
// import Navbar from '@/components/Navbar/Navbar'

// function page() {
//     const [ buyerd , setbuyd] = useState("");
//   const getbuyd = async()=>{
//           console.log("get data buyer")
//           const res = await axios.post("/api/buyer/getbuyerdata");
//         console.log(res.data , 'dash bodard');
//           await setbuyd(res.data.data);
//           console.log(buyerd , "farmd")
//   }
//   useEffect(()=>{
//           console.log("hellow");
//           console.log(buyerd)
//            getbuyd();
//   } , [buyerd])
//   return (
//     <>
//     <div>{buyerd.name} buyer</div>
//     <Navbar/>
//     </>
//   )
// }

// export default page

'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import axios from 'axios';  // Ensure axios is imported

function Page() {  // Component names should be caepitalized
    const [buyerd, setbuyerd] = useState("");  // Initialize with null or an empty object
    
    const getBuyerd = async () => {
        try {
            console.log("Fetching buyer data...");
            const res = await axios.post("/api/buyer/getbuyerdata");
            console.log(res.data.data, 'dash board data');
            await setbuyerd(res.data.data);
            console.log(buyerd , "buyerd")  // Update state with new data
        } catch (error) {
            console.error("Error fetching buyer data:", error);
        }
    };

    useEffect(() => {
        getBuyerd();  // Fetch data when component mounts
    }, []);  // Empty dependency array ensures this runs only once after the initial render

    return (
        <>
            <div>{buyerd != "" ? buyerd.phonenumber : "buyer name"}</div>
            <Navbar />
        </>
    );
}

export default Page;
