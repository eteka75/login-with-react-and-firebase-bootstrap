import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export default function Navbar() {
    const { toggleModals}= useContext(UserContext);

  return (
    <nav className="navbar navbar-light bg-light px-4">
        <Link to={'/'} className='navbar-brand'> AuthJS</Link>
        <div>
            <button onClick={() => toggleModals("SignUp")} 
            className="btn btn-primary">
                Sign Up
            </button>
            <button onClick={() => toggleModals("SignIn")} 
            className="btn btn-primary ms-2">
                Sign In
            </button>
            <button onClick={() => toggleModals("Close")}  className="btn btn-danger ms-2">
                Log Out
            </button>
        </div>
    </nav>
  )
}
