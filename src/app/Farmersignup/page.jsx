// src/LoginForm.js
'use client'
import React, { useState } from 'react';
import style from '../../Stylesheet/farmersignup.module.css'
import Link from 'next/link';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { useRouter } from 'next/navigation'

function page(){
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    email: '',
    city: '',
    password: ''
  });

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const res =  await axios.post('/api/farmer/farmersignup' , formData);
    console.log( res);
    router.push("/Farmerlogin");
    // Add form submission logic here
  };

  return (
    // <div className={style.body}>
    // <div className={style.loginformcontainer}>
    //   <h1 style={{marginBottom : '20px'}}>Farmer Signup</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div className={style.formgroup}>
    //       <label htmlFor="name">Name:</label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className={style.formgroup}>
    //       <label htmlFor="phone">Phone Number:</label>
    //       <input
    //         type="text"
    //         id="phone"
    //         name="phone"
    //         value={formData.phone}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className={style.formgroup}>
    //       <label htmlFor="area">Area of Farm:</label>
    //       <input
    //         type="text"
    //         id="area"
    //         name="area"
    //         value={formData.area}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className={style.formgroup}>
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className={style.formgroup}>
    //       <label htmlFor="city">City:</label>
    //       <input
    //         type="text"
    //         id="city"
    //         name="city"
    //         value={formData.city}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className={style.formgroup}>
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <button style={{marginBottom:'7px'}} className={style.button} type="submit">Submit</button>
    //   </form>
    //   <Link href="../Farmerlogin">Already have an account ?</Link>
    // </div>
    // </div>
    <div className={style.bodyContainerDark}>
    <div className={style.leftContainerDark}></div>
    <div className={style.rightContainerDark}>
    <div className={style.loginFormContainerDark}>
    <h1 className={style.loginTitleDark}>Farmer Signup</h1>
    <form onSubmit={handleSubmit}>
      <div className={style.formGroupDark}>
        <label className={style.formLabelDark} htmlFor="name">Name:</label>
        <input
        className={style.formInputDark}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={style.formGroupDark}>
        <label className={style.formLabelDark} htmlFor="phone">Phone Number:</label>
        <input
        className={style.formInputDark}
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className={style.formGroupDark}>
        <label className={style.formLabelDark} htmlFor="area">Area of Farm:</label>
        <input
        className={style.formInputDark}
          type="text"
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
        />
      </div>
      <div className={style.formGroupDark}>
        <label className={style.formLabelDark} htmlFor="email">Email:</label>
        <input
        className={style.formInputDark}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={style.formGroupDark}>
        <label className={style.formLabelDark} htmlFor="city">City:</label>
        <input
        className={style.formInputDark}
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className={style.formGroupDark}>
        <label className={style.formLabelDark} htmlFor="password">Password:</label>
        <input
         className={style.formInputDark}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button
              className={style.submitButtonDark}
              type="submit"
            >
              Submit
            </button>
  
    </form>
    <Link className={style.signupLinkDark}  href="../Farmerlogin">Already have an account ?</Link>
  </div>
  </div>
  </div>
  );
};

export default page;
