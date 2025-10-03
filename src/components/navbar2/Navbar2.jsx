import './navbar2.css'
import { useNavigate } from "react-router-dom";
import React from 'react'

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>BookMyStay</span>
            
        </div>
    </div>
  )
}

export default Navbar2