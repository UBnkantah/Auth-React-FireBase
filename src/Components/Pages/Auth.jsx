import React from 'react'
import {signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from "../utils/firebase/firebase"

import SignIn from './SignIn';
import SignUp from './SignUp';


const Authenication = () => {
  return (
    <div>
        <h1>SIGN IN</h1>
        <SignIn />
        <SignUp />
        {/* <button onClick={logGoogleUser}>Click Me</button> */}
    </div>
  )
}

export default Authenication;