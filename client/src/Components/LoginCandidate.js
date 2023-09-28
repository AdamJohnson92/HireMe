import { useState } from 'react';
import candidate from "../assets/candidate.png";
import "../App.css";

export default function Login() {
    const [emailForm, setEmailForm] = useState('');
    const [passwordForm, setPasswordForm] = useState('');

    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        if (inputName === 'email') {
            setEmailForm(inputValue);
        } else if (inputName === 'password') {
            setPasswordForm(inputValue);
        }
    }

    const handleSubmit = (event) => {
        const validEmailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);

        const emailCheck = validEmailRegex.test(emailForm);
        if (emailCheck === false) {
            window.alert('Not a valid email address');
        }
        if (!emailForm || !passwordForm) {
            window.alert('All fields must be complete.');
        }
        event.preventDefault();

        if (emailCheck === true && emailForm && passwordForm) {
            window.alert('Logging in Test');

            setEmailForm('');
            setPasswordForm('');
        }
    }

    const formStyle = {
        width: '300px',
        margin: '0 auto',
        textAlign: 'center',
    };

    const labelStyle = {
        textAlign: 'left',
        display: 'block',
        marginBottom: '0',
    };

    return (
        <div className="login-column">
            <img src={candidate} alt="Candidate" width="250" height="250" />

<h2 style={{ color: '#5271FF', textAlign: 'center', paddingBottom: '10px', paddingTop: '30px' }}>Candidate Login</h2>
            <form className="login-form" onSubmit={handleSubmit} style={formStyle}>
                <label className='form-label' htmlFor='email' style={labelStyle}>Email:</label>
                <input className='form-box' type='text' name='email' value={emailForm || ''} onChange={handleInputChange} />

                <label className='form-label' htmlFor='password' style={labelStyle}>Password:</label>
                <input className='form-box' id='password-box' type='password' name='password' value={passwordForm || ''} onChange={handleInputChange} />

                <input className='custom-btn' type='submit' value='Login' style={{ display: 'block', margin: '20px auto 0' }} />
            </form>
        </div>
    )
}
