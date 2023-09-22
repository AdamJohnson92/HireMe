import React, { useState } from "react";

export default function Login() {

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

    return (
        <>
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