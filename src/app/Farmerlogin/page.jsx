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
   
    <div className={style.bodyContainerDark}>
    <div className={style.leftContainerDark}></div>
    <div className={style.rightContainerDark}>
      <div className={style.loginFormContainerDark}>
    <h1 className={style.loginTitleDark}>Farmer Login</h1>
    <form onSubmit={handleSubmit}>

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
    <Link className={style.signupLinkDark} href="../Farmersignup">Don't have an account ?</Link>
  </div>
  </div>
  </div>
  );
};

export default page;