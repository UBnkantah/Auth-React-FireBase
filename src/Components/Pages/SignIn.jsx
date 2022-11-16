import React from 'react'
import { useState } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../utils/firebase/firebase"
import FormInput from "../FormInput/FormInput"

const defaultFormFields = {
    email: "",
    password: ""
}

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    // console.log(formFields);

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword (email, password);
            console.log(response);
            resetFormField();

        } catch (error) {
            if(error.code === 'auth/wrong-password'){
                alert("you have enter a wrong password");
            }
            if(error.code === 'auth/too-many-requests'){
                alert("Too Many attempt, Try Again Later");
            }
            if(error.code === 'auth/user-not-found'){
                alert("Email does not Exist, Sign Up!!")
            }
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value });
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

  return (
    <div>
        <h1>Welcome</h1>
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Email"
            type="email" name="email" id="" onChange={handleChange} value={email} required />
            <FormInput
                label="Password"
            type="password" name='password' onChange={handleChange} value={password} required />

            <button type='submit'>SIGN IN</button>
            
        </form>
        <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
    </div>
  )
}

export default SignIn