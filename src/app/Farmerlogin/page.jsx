'use client'
import React, { useState } from 'react';
import style from '../../Stylesheet/farmersignup.module.css'
import Link from 'next/link';
import signup from '../Farmersignup/page'
import axios from 'axios';
import { useRouter } from 'next/navigation';
function page(){
  const router = useRouter()
  const [formData, setFormData] = useState({
   
    phone: '',

    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
   const  res = await axios.post('/api/farmer/farmerlogin' , formData)
    console.log(res);
    router.push("/Farmerdashboard");
    // Add form submission logic here
  };

  return (
    <div className={style.body}>
    <div className={style.loginformcontainer}>
      <h1 style={{marginBottom : '20px'}}>Farmer Login</h1>
      <form onSubmit={handleSubmit}>
  
        <div className={style.formgroup}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button style={{marginBottom:'8px'}} className={style.button} type="submit">Submit</button>
      </form>
      <Link href="../Farmersignup">Don't have an account ?</Link>
    </div>
    
    </div>
  );
};

export default page;