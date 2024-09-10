'use client'
// import React from 'react'
import axios from 'axios'
import style from './Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
function Navbar() {
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
        <div>profile</div>
        <div className={style.links}>
        <Link href='/'>Home</Link>
        <Link href='/'>About Us</Link>
        <Link href='/'>Contact</Link>
        <button onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar