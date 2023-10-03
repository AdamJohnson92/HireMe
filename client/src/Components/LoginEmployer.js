import React, { useState } from 'react';
import "../App.css";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function LoginEmployer() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);

            // Redirect to the employer page after successful login
            window.location.href = '/employer'; // Replace with the actual URL of the employer page
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

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

                <h2 style={{ color: '#5271FF', textAlign: 'center', paddingBottom: '10px', paddingTop: '30px' }}>Employer Login</h2>
                <form className="login-form" onSubmit={handleSubmit} style={formStyle}>
                    <label className='form-label' htmlFor='email' style={labelStyle}>Email:</label>
                    <input className='form-box' type='text' name='email' value={formState.email || ''} onChange={handleChange} />

                    <label className='form-label' htmlFor='password' style={labelStyle}>Password:</label>
                    <input className='form-box' id='password-box' type='password' name='password' value={formState.password || ''} onChange={handleChange} />

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
