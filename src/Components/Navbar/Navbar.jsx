import React from 'react'
import { Link } from "react-router-dom"
// import Authenication from "../Pages/Auth"
// import SignUp from '../Pages/SignUp'

function Navbar() {
  return (
    <div className='Navbar'>
        <h1>Logo</h1>
        <div >
            <Link to="/">SHOP</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/auth">Authenication</Link>
            <Link to="/feedback">Feedback</Link>
        </div>
    </div>
  )
}

export default Navbar