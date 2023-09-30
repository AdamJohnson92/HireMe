import React, { useState } from 'react';
import "../App.css";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

//Must add radial button to signup to select if you are a candidate or an employer

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isEmployer: false
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    width: '400px',
    height: '30px',
  };

  const mainStyle = {
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: 'calc(100vh - 120px)', 
  };

  return (
    <main className="flex-row justify-center mb-4" style={mainStyle}>
      <div className="col-12 col-lg-6">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body" style={{ marginTop: '175px' }}>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <input
                    className="form-box"
                    placeholder="Your first name"
                    name="firstName"
                    type="text"
                    value={formState.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-box"
                    placeholder="Your last name"
                    name="lastName"
                    type="text"
                    value={formState.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-box"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-box"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div className="mb-3">
                Are you an employer? <input
                    className="form-box"
                    name="isEmployer"
                    type="checkbox"
                    defaultChecked={false}
                    value={formState.isEmployer}
                    style={inputStyle}
                  />
                  </div>
                <button
                  className="custom-btn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
