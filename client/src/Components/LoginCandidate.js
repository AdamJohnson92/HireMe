
import { useState } from 'react'
import "../App.css";

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

    const handleSubmit = (event) => {
        const validEmailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)

        const emailCheck = validEmailRegex.test(emailForm)
        if (emailCheck === false) {
            window.alert('Not a valid email address')
        }
        if (!emailForm || !passwordForm) {
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
        <div className="login-column">

            <h3 style={{ color: '#5271FF', textAlign: 'center', paddingBottom: '10px' }}>Candidate Login</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className='form-label' htmlFor='email'>Email:
                    <input className='form-box' type='text' name='email' value={emailForm || ''} onChange={handleInputChange} style={{ width: '100%', height: '20px' }}></input>
                </label>

                <label className='form-label' htmlFor='password'> Password :
                    <input className='form-box' id='password-box' type='text' name='password' value={passwordForm || ''} onChange={handleInputChange} style={{ width: '100%', height: '20px' }}></input>
                </label>

                <input className='custom-btn' type='submit' value='Login' style={{ display: 'block', margin: '0 auto' }} />
            </form>
        </div>

    )
}

