// 'use client'
// import React, { useState } from 'react';
// import style from '../../Stylesheet/farmersignup.module.css'
// import Link from 'next/link';
// import signup from '../Farmersignup/page'
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// function page(){
//   const router = useRouter()
//   const [formData, setFormData] = useState({
   
//     phone: '',

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
//    const  res = await axios.post('/api/farmer/farmerlogin' , formData)
//     console.log(res);
//     router.push("/Farmerdashboard");
//     // Add form submission logic here
//   };

//   return (
   
//     <div className={style.bodyContainerDark}>
//     <div className={style.leftContainerDark}></div>
//     <div className={style.rightContainerDark}>
//       <div className={style.loginFormContainerDark}>
//     <h1 className={style.loginTitleDark}>Farmer Login</h1>
//     <form onSubmit={handleSubmit}>

//       <div className={style.formGroupDark}>
//         <label className={style.formLabelDark} htmlFor="phone">Phone Number:</label>
//         <input
//          className={style.formInputDark}
//           type="text"
//           id="phone"
//           name="phone"
//           value={formData.phone}
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
//     <Link className={style.signupLinkDark} href="../Farmersignup">Don't have an account ?</Link>
//   </div>
//   </div>
//   </div>
//   );
// };

// export default page;

'use client'
import React, { useState } from 'react';
import { Leaf, ShoppingBag, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function page() {
  const router = useRouter();
  const [userType, setUserType] = useState('farmer');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userType !== 'farmer') {
      alert('Please select "Farmer" to login.');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('/api/farmer/farmerlogin', {
        phone,
        password,
      });

      console.log('Login success:', res.data);
      router.push('/Farmerdashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid phone number or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left side - Features */}
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

        {/* Right side - Sign in form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>
          
          {/* User Type Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-black">
            <button
              onClick={() => setUserType('farmer')}
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
                router.push('./Buyerlogin')
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

          {/* Sign in Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-green-600 hover:text-green-700">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              disabled={loading}
            >
              {loading ? (
                <span>Logging in...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/Farmersignup" className="text-green-600 hover:text-green-700 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;

