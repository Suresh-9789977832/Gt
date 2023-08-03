import React, { useState } from 'react'
import "./Navbar.css"

function Navbar() {

        const [open,setopen]=useState(false)
        const handleclick=()=>{
                setopen(prev=>!prev)
        }
  return <>
        <nav className='navbar sticky'>
            <div className='logo'>
                <img src='/images/Gt.webp'/>
            </div>

            <div className='icons' onClick={handleclick}>
           {open?<i className="fa-solid fa-x"></i>:<i className="fa-solid fa-bars"></i>} 
            
            </div>

            <ul className={open?'nav-links':'nav-links active'}>
                <li>HOME</li>
                <li>COMPANY</li>
                <li>GROUP TOURS</li>
                <li>PACKAGES</li>
                <li>HONEYMOON</li>
                <li>CRUISES</li>
                <li>WEDDING</li>
                <li>CONTACT</li>
            </ul>

            <p className='num'>+91 9 3 4 4 8 9 0 1 3 3</p>
        </nav>
  </>
}

export default Navbar
