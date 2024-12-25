'use client';

import React, { useState } from 'react';
import style from '../../Stylesheet/farmersignup.module.css';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function BuyerLoginPage() {
  const router = useRouter();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form submitted:', formData);
      const res = await axios.post('/api/buyer/buyerlogin', formData);
      console.log(res);
      if (res.status === 200) {
        router.push('/Buyerdashboard');
      } else {
        alert('Invalid credentials!');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className={style.bodyContainerDark}>
      <div className={style.leftContainerDark}></div>
      <div className={style.rightContainerDark}>
        <div className={style.loginFormContainerDark}>
          <h1 className={style.loginTitleDark}>Buyer Login</h1>
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
          <Link className={style.signupLinkDark} href="../Buyersignup">Don't have an account?</Link>
        </div>
      </div>
    </div>
  );
}

export default BuyerLoginPage;
