'use client'
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../Stylesheet/farmer.module.css';
import Navbar from '@/components/Navbar/Navbar';
import axios from 'axios';
import Sidebar from '@/components/Slidebar/Slidebar';
import Chart from '@/components/Chart/Chart';




function page() {
        const [ farmd , setfarmd] = useState("");
  const getfarmerdta = async()=>{
          const res = await axios.post("/api/farmer/getfarmerdata");
           console.log(res.data , 'dash bodard');
          await setfarmd(res.data.data);
          console.log(farmd , "farmd")
  }
  useEffect(()=>{
          console.log("hellow");
           getfarmerdta();
  } , [])
  return (
     
//   <div className={style.body}>
//        <Navbar/>
//        <div className={style.buttons}>
//              <div className={style.butcon}>
//             <button className={style.button}>  { farmd == "" ? "find " :  farmd.name}</button>
//             <button className={style.button}>Conmtact Management</button>
//             <button className={style.button}>Sequrity</button>
//             <button className={style.button}>Farmer Guide</button>
//             </div>  
//        </div>
//   </div>
<>
<div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Chart />
      </div>
    </div>
</>
 
  )
}

export default page