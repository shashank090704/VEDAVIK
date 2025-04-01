// // src/LoginForm.js
// 'use client'
// import React, { useState } from 'react';
// import style from '../../Stylesheet/farmersignup.module.css'
// import Link from 'next/link';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// function page(){
//   const router = useRouter()
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     city: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     const res = await axios.post("/api/buyer/buyersignup" , formData);
//     console.log(res)
//     router.push("/Buyerlogin")
//     // Add form submission logic here
//   };

//   return (
//     <div className={style.bodyContainerDark}>
//    <div className={style.leftContainerDark}></div>
//    <div className={style.rightContainerDark}>
//    <div className={style.loginFormContainerDark}>
//     <h1 className={style.loginTitleDark}>Buyer Signup</h1>
//     <form onSubmit={handleSubmit}>
//       <div className={style.formGroupDark}>
//         <label className={style.formLabelDark} htmlFor="name">Name:</label>
//         <input
//            className={style.formInputDark}
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={style.formGroupDark}>
//         <label className={style.formLabelDark} htmlFor="phone">Phone Number:</label>
//         <input
//         className={style.formInputDark}
//           type="text"
//           id="phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={style.formGroupDark}>
//         <label className={style.formLabelDark} htmlFor="email">Email:</label>
//         <input
//         className={style.formInputDark}
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={style.formGroupDark}>
//         <label className={style.formLabelDark} htmlFor="city">City:</label>
//         <input
//         className={style.formInputDark}
//           type="text"
//           id="city"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={style.formGroupDark}>
//         <label className={style.formLabelDark} htmlFor="password">Password:</label>
//         <input
//           className={style.formInputDark}
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button
//               className={style.submitButtonDark}
//               type="submit"
//             >
//               Submit
//             </button>
//     </form>
//     <Link className={style.signupLinkDark} href="../Buyerlogin">Already have an account ?</Link>
//     </div>
//       </div>
//     </div>

//   );
// };

// export default page;

'use client';
import React, { useState } from 'react';
import { Leaf, ShoppingBag, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


function BuyerSignup() {
  const router = useRouter();
  const [userType, setUserType] = useState('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, phone, email, city, password };
    try {
      const res = await axios.post("/api/buyer/buyersignup", formData);
      console.log(res);
      router.push("/Buyerlogin");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block space-y-8 p-8">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-green-800">FarmConnect</h1>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Connect Farmers and Buyers Directly
            </h2>
            <p className="text-gray-600">
              Join our platform to revolutionize agricultural trade with direct farmer-to-buyer connections.
            </p>
            <div className="grid gap-4">
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">For Farmers</h3>
                  <p className="text-sm text-gray-600">List your produce and connect with buyers directly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ShoppingBag className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">For Buyers</h3>
                  <p className="text-sm text-gray-600">Source fresh produce directly from local farmers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign up</h2>
           <div className="grid grid-cols-2 gap-4 mb-6 text-black">
                      <button
                        onClick={() =>{setUserType('farmer')
                          router.push('./Farmersignup')
                        }
                        }
                        className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all ${
                          userType === 'farmer'
                            ? 'border-green-600 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-green-400'
                        }`}
                      >
                        <Leaf className="w-5 h-5" />
                        <span>Farmer</span>
                      </button>
                      
                      <button
                        onClick={() => {setUserType('buyer')
                         
                        }}
                        className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all ${
                          userType === 'buyer'
                            ? 'border-green-600 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-green-400'
                        }`}
                      >
                        <ShoppingBag className="w-5 h-5" />
                        <span>Buyer</span>
                      </button>
                    </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full  text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                placeholder='Enter your name'
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full  text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                  placeholder='Enter your phone number'
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                  placeholder='Enter your email'
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full  text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                  placeholder='Enter your city'
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full  text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                  placeholder='Enter your password'
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Sign Up</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/Buyerlogin" className="text-green-600 hover:text-green-700 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuyerSignup;
