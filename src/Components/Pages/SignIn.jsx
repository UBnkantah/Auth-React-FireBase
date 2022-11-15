import React from 'react'
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../utils/firebase/firebase"


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
  return (
    <div>
        <h1>SIGN IN</h1>
        <button onClick={logGoogleUser}>Click Me</button>
    </div>
  )
}

export default SignIn