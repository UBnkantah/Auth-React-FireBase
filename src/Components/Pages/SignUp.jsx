import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase"
import FormInput from "../FormInput/FormInput"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Password do not match");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, {displayName});
            
            resetFormField();
            

        } catch (error) {

            if(error.code === "auth/email-already-in-use"){
                alert("Cannot Create User, Email has aready been used")
            }else(
                console.log("user creation encountered an error", error)
            )

            
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value });
    }

  return (
    <div>
        <h1>Welcome</h1>
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Display Name"
            type="text" onChange={handleChange} name="displayName" value={displayName} required/>
            <FormInput
                label="Email"
            type="email" name="email" id="" onChange={handleChange} value={email} required />
            <FormInput
                label="Password"
            type="password" name='password' onChange={handleChange} value={password} required />
            <FormInput
                label="Confirm Password"
                type="password" 
                name='confirmPassword' 
                onChange={handleChange} 
                value={confirmPassword} required />
            <button type='submit'>SIGN UP</button>
        </form>
    </div>
  )
}

export default SignUp