'use client'
// import React from 'react'
import axios from 'axios'
import style from './Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaMapMarkerAlt, FaStar, FaUser } from 'react-icons/fa';
function Navbar() {
  const styles = {
    profileContainer: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: 'black',  // Black circular background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10px',
      margin:'50px',
    },
    profileIcon: {
      fontSize: '50px',
      color: 'white', // White person icon
      margin:'10px',
    },
    text: {
      fontSize: '16px',
      margin: '5px 0',
      color: '#fff',
    },
    icon: {
      marginLeft: '5px',
      color: '#f05a28',
    },
    image: {
      width: '150px',
      height: 'auto',
      borderRadius: '10px',
      marginLeft: '20px',
    },
    Id: {
      textAlign:'center',
      fontSize:'20px',
  
    }
  };



      const router = useRouter();
    const logout = async()=>{
      try {
        const res = await axios.post("/api/farmer/logout")
        router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className={style.body}>
        <div className={style.profile}>
        <FaUser style={styles.profileIcon} />
        {/* <div style={styles.Id}>Id</div> */}
        </div>
        
        <div className={style.links}>
        <Link href='/'>Home</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
        <button onClick={logout}>Logout</button>
        </div>
        
        
    </div>
  )
}

export default Navbar