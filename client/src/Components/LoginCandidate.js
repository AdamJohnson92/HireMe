import React, { useState } from 'react';
import "../App.css";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Login() {
    const [login, { error, data }] = useMutation(LOGIN_USER);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validEmailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);

        const emailCheck = validEmailRegex.test(emailForm);
        if (emailCheck === false) {
            window.alert('Not a valid email address');
        }
        if (!emailForm || !passwordForm) {
            window.alert('All fields must be complete.');
        }
        if (emailCheck === true && emailForm && passwordForm) {
            try {
                const { data } = await login({
                  variables: { ...emailForm, ...passwordForm },
                });
          
                Auth.login(data.login.token);
              } catch (e) {
                console.error(e);
              }

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
        <div className="background-image">
        <div className="login-column">            

<h2 style={{ color: '#5271FF', textAlign: 'center', paddingBottom: '10px', paddingTop: '30px' }}>Candidate Login</h2>
            <form className="login-form" onSubmit={handleSubmit} style={formStyle}>
                <label className='form-label' htmlFor='email' style={labelStyle}>Email:</label>
                <input className='form-box' type='text' name='email' value={emailForm || ''} onChange={handleInputChange} />

                <label className='form-label' htmlFor='password' style={labelStyle}>Password:</label>
                <input className='form-box' id='password-box' type='password' name='password' value={passwordForm || ''} onChange={handleInputChange} />

                <input className='custom-btn' type='submit' value='Login' style={{ display: 'block', margin: '20px auto 0' }} />
            </form>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
        </div>
        </div>
    )
}
