import { useState } from 'react';
import "../App.css";

export default function LoginEmployer() {
    const [emailFormEmployer, setEmailFormEmployer] = useState('');
    const [passwordFormEmployer, setPasswordFormEmployer] = useState('');

    const handleInputChangeEmployer = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        if (inputName === 'employer-email') {
            setEmailFormEmployer(inputValue);
        } else if (inputName === 'password') {
            setPasswordFormEmployer(inputValue);
        }
    }

    const handleSubmitEmployer = (event) => {
        const validEmailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);

        const emailCheck = validEmailRegex.test(emailFormEmployer);
        if (emailCheck === false) {
            window.alert('Not a valid email address');
        }
        if (!emailFormEmployer || !passwordFormEmployer) {
            window.alert('All fields must be complete.');
        }
        event.preventDefault();

        if (emailCheck === true && emailFormEmployer && passwordFormEmployer) {
            window.alert('Logging in Test');

            setEmailFormEmployer('');
            setPasswordFormEmployer('');
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
            <h2 style={{ color: '#5271FF', textAlign: 'center', paddingBottom: '10px' }}>Employer Login</h2>
            <form className="login-form" onSubmit={handleSubmitEmployer} style={formStyle}>
                <label className='form-label' htmlFor='employer-email' style={labelStyle}>Email:</label>
                <input className='form-box' type='text' name='employer-email' value={emailFormEmployer || ''} onChange={handleInputChangeEmployer} />

                <label className='form-label' htmlFor='password' style={labelStyle}>Password:</label>
                <input className='form-box' id='password-box' type='password' name='password' value={passwordFormEmployer || ''} onChange={handleInputChangeEmployer} />

                <input className='custom-btn' type='submit' value='Login' style={{ display: 'block', margin: '20px auto 0' }} />
            </form>
        </div>
    )
}