'use client'
import React, { useState } from 'react';
import style from '../../Stylesheet/createorder.module.css'
import axios from 'axios';


const Page = () => {
  const [formData, setFormData] = useState({
    cropName: '',
    duration: '',
    amountPerKg: '',
    quantity: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    const res = await axios.post("/api/buyer/createorder" , formData)
    console.log(res);
  };

  return (
    <div className={style.body}>
    <div className={style.formContainer}>
      <h2>Crop Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="cropName">Name of Crop:</label>
          <input
            type="text"
            id="cropName"
            name="cropName"
            value={formData.cropName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="duration">Duration (months):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="amountPerKg">Amount per Kg:</label>
          <input
            type="number"
            id="amountPerKg"
            name="amountPerKg"
            value={formData.amountPerKg}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
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

        <button type="submit" className={style.button}>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Page;
