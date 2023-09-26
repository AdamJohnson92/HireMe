import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import "../App.css";
import employer from "../assets/employer.png";
import candidate from "../assets/candidate.png";


export default function Login() {

    // const {user, setUser} = useContext(LoginContext)



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
        <main className="main">
            {/* Introduction paragraph */}
            <div className="background-image">
                <div className="introduction-container">
                    <p className="introduction">
                        <span className="introduction-title">Welcome to Hire Me!</span>
                        <br />
                        <br />
                        Your platform for connecting with the perfect job candidates. Hire Me empowers employers to effortlessly search and connect with active job candidates. Employers can easily browse candidate profiles, access their resumes, and identify ideal candidates for their current job openings. Hire Me simplifies the hiring process, providing employers with an efficient way to discover and connect with potential candidates, while offering job seekers a dynamic platform to showcase their skills, ready to be discovered by eager employers.
                        <br />
                        <br />
                        So, what are you waiting for?! Join Hire Me today and start connecting with your ideal candidates.
                        <br />
                        <br />
                        <a href="path_to_signup_js">Signup Now!</a>
                    </p>
                </div>
            </div>


            {/* Login forms */}
            <div className="login-container">
                <div className="login-column">
                <img src={candidate} alt="Candidate" width="250" height="250" />

                <h3 style={{ color: '#5271FF', textAlign: 'center', paddingBottom: '10px' }}>Candidate Login</h3>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label className='form-label' htmlFor='email'>Email:
                            <input className='form-box' type='text' name='email' value={emailForm || ''} onChange={handleInputChange} style={{ width: '100%', height: '20px' }}></input>
                        </label>

                        <label className='form-label' htmlFor='password'> Password :
                            <textarea className='form-box' id='password-box' type='text' name='password' value={passwordForm || ''} onChange={handleInputChange} style={{ width: '100%', height: '20px' }}></textarea>
                        </label>

                        <input className='custom-btn' type='submit' value='Login' style={{ display: 'block', margin: '0 auto' }} />
                    </form>
                </div>

                <div className="login-column">
                <img src={employer} alt="Employer" width="250" height="250" />

                <h3 style={{ color: '#5271FF', textAlign: 'center', paddingBottom: '10px' }}>Employer Login</h3>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label className='form-label' htmlFor='email'>Email:
                            <input className='form-box' type='text' name='email' value={emailForm || ''} onChange={handleInputChange} style={{ width: '100%', height: '20px' }}></input>
                        </label>

                        <label className='form-label' htmlFor='password'> Password :
                            <textarea className='form-box' id='password-box' type='text' name='password' value={passwordForm || ''} onChange={handleInputChange} style={{ width: '100%', height: '20px' }}></textarea>
                        </label>

                        <input className='custom-btn' type='submit' value='Login' style={{ display: 'block', margin: '0 auto' }} />
                    </form>
                </div>
            </div>
        </main>
    );
}