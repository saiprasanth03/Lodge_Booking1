
import { useNavigate } from "react-router-dom";
import React from 'react'
import './navbar.css'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>BookMyStay</span>
            <div className='navBtns'>
                <button className='navButton' onClick={() => navigate(`/register`)}>Register</button>
                <button className='navButton' onClick={() => navigate(`/register/login`)}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar

