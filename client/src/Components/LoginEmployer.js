import employer from "../assets/employer.png";
import {useState} from 'react'
import "../App.css";

export default function LoginEmployer() {
    const [emailFormEmployer, setEmailFormEmployer] = useState('')
    const [passwordFormEmployer, setPasswordFormEmployer] = useState('')


    const handleInputChangeEmployer = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value


        if (inputName === 'employer-email') {
            setEmailFormEmployer(inputValue)
            console.log(inputValue)
        } else if (inputName === 'password') {
            setPasswordFormEmployer(inputValue)
            console.log(inputValue)
        }
    }

    const handleSubmitEmployer = (event) => {
        const validEmailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)

        const emailCheck = validEmailRegex.test(emailFormEmployer)
        if (emailCheck === false) {
            window.alert('Not a valid email address')
        }
        if (!emailFormEmployer || !passwordFormEmployer) {
            window.alert('All three fields must be complete.')
        }
        event.preventDefault()

        if (emailCheck === true && emailFormEmployer && passwordFormEmployer) {
            window.alert('Logging in Test')

            setEmailFormEmployer('')
            setPasswordFormEmployer('')
        }
    }

    return (
        <div className="login-column">
                <img src={employer} alt="Employer" width="250" height="250" />

                <h3 style={{ color: '#5271FF', textAlign: 'center', paddingBottom: '10px' }}>Employer Login</h3>
                    <form className="login-form" onSubmit={handleSubmitEmployer}>
                        <label className='form-label' htmlFor='email'>Email:
                            <input className='form-box' type='text' name='employer-email' value={emailFormEmployer || ''} onChange={handleInputChangeEmployer} style={{ width: '100%', height: '20px' }}></input>
                        </label>

                        <label className='form-label' htmlFor='password'> Password :
                            <textarea className='form-box' id='password-box' type='text' name='password' value={passwordFormEmployer || ''} onChange={handleInputChangeEmployer} style={{ width: '100%', height: '20px' }}></textarea>
                        </label>

                        <input className='custom-btn' type='submit' value='Login' style={{ display: 'block', margin: '0 auto' }} />
                    </form>
                </div>
    )
}
