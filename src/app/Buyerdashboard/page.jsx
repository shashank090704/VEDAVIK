

'use client';
 
// import React, { useEffect, useState } from 'react';
// import Navbar from '@/components/Navbar/Navbar';
// import axios from 'axios';  // Ensure axios is imported
import React, { useContext, useEffect, useState } from 'react'
// import styles from '../../Stylesheet/buyer.module.css';
import styles from './../../Stylesheet/farmer.module.css';
import Navbar from '@/components/Navbar/Navbar';
import axios from 'axios';
import Buyers from '@/components/Slidebar/Buyers';
import Chart from '@/components/Chart/Chart';
import Order from '@/components/ordercomponentforbuyer/Order';


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
        // <>
        //     <div>{buyerd != "" ? buyerd.phonenumber : "buyer name"}</div>
        //     <Navbar />
        // </>
        <>
        <div className={styles.dashboardContainer}>
              <Navbar/>
              

              


              <div className={styles.dashboardContent}>
              <Buyers />
                  {/* <Chart />  */}
                  <div className={styles.mainContent}>
          <h1 className={styles.welcomeMessage}>
            Welcome, {buyerd ? buyerd.name : 'Buyer'}!
          </h1>
          <Chart />
        </div>
              
              </div>
            </div>
        </>
    );
}

export default Page;
