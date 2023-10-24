import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='border-2 border-black p-4 w-full flex justify-between items-center'>
        <div className='border'>
        <h1 className='text-2xl'>LOGO</h1>
        </div>
       
       <div className='border'>
       <ul className='flex gap-6'>
        
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li></li>
        </ul>
       </div>

    </div>
  )
}

export default NavBar