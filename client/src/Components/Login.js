import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";


export default function Login() {

    const {setUserEmail} = useContext(LoginContext)

   

    const [emailForm, setEmailForm] = useState('')
    const [passwordForm, setPasswordForm] = useState('')


    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value


        if (inputName === 'email') {
            setEmailForm(inputValue)
            console.log(inputValue)
        } else if (inputName === 'password') {
            setPasswordForm(inputValue)
            console.log(inputValue)
        }
    }

 const handleSubmit = (event) => {
        const validEmailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
    
        const emailCheck = validEmailRegex.test(emailForm)
        if (emailCheck === false) {
          window.alert('Not a valid email address')
        }
        if ( !emailForm || !passwordForm) {
          window.alert('All three fields must be complete.')
        }
        event.preventDefault()
    
        if (emailCheck === true && emailForm && passwordForm) {
           window.alert('Logging in Test')
     
        setEmailForm('')
        setPasswordForm('')
        }
      }

    return (
        <>
            <h3>Login As A Candidate</h3>
            <form className="login-form">

                <label className='form-label' htmlFor='email'>Email:
                    <input className='form-box' type='text' name='email' value={emailForm || ''} onChange={handleInputChange}></input>
                </label>

                <label className='form-label' htmlFor='password'> Password :
                    <textarea className='form-box' id='password-box' type='text' name='password' value={passwordForm || ''} onChange={handleInputChange}>
                    </textarea></label>

                <input className='btn' type='submit' value='Send' onClick={handleSubmit}
                />

            </form>

            <h3>Login As An Employer</h3>
            <form className="login-form">

                <label className='form-label' htmlFor='email'>Email:
                    <input className='form-box' type='text' name='email' value={emailForm || ''} onChange={handleInputChange}></input>
                </label>

                <label className='form-label' htmlFor='password'> Password :
                    <textarea className='form-box' id='password-box' type='text' name='password' value={passwordForm || ''} onChange={handleInputChange}>
                    </textarea></label>

                <input className='btn' type='submit' value='Send' onClick={handleSubmit}
                />

            </form>


        </>
    )

}