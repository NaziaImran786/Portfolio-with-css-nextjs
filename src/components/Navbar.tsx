import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className='bg-pink-300 text-black w-full h-50' id='navBar'>
        <div id='navheadingDiv'>
          <h1>Portfolio</h1>
          </div>
          <div id='navBtn'>
          <Link href="/"><button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>Home</button></Link>
          <Link href="/about"><button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-black mt-3'>About</button></Link>
          <Link href="/skill"><button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-black mt-3'>skill</button></Link>
          <Link href="/myprojects"><button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-black mt-3'>Projects</button></Link>
          <Link href="/contact"><button className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-black mt-3'>Contact</button></Link>
          
        </div>
    </nav>
  )
}

export default Navbar
