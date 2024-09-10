// src/LoginForm.js
'use client'
import React, { useState } from 'react';
import style from '../../Stylesheet/farmersignup.module.css'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
function page(){
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
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
    const res = await axios.post("/api/buyer/buyersignup" , formData);
    console.log(res)
    router.push("/Buyerlogin")
    // Add form submission logic here
  };

  return (
    <div className={style.body}>
    <div className={style.loginformcontainer}>
      <h1 style={{marginBottom : '20px'}}>Buyer Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.formgroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formgroup}>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
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
        <button style={{marginBottom:'7px'}} className={style.button} type="submit">Submit</button>
      </form>
      <Link href="../Buyerlogin">Already have an account ?</Link>
    </div>
    </div>
  );
};

export default page;
