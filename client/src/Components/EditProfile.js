import { UserContext } from "../pages/Profile";
import React, { useContext, useState } from "react";

export default function EditCandidate({ editDisplay, setEditDisplay }) {
    console.log(editDisplay);
    const user = useContext(UserContext);
    console.log(user);

    const [formState, setFormState] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userCity: user.userCity,
        userState: user.userState,
        education: user.education,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    function handleEditSubmit(event) {
        event.preventDefault();
        console.log(editDisplay);
        setEditDisplay('hidden');
    }

    return (
        // must add  onSubmit handler
        <div>
            <form className={editDisplay}>
                <label className='form-label' htmlFor='firstName'> First Name:</label>
                <input
                    className='canidate-form-box'
                    type='text'
                    name='firstName'
                    value={formState.firstName}
                    defaultValue={formState.firstName || user.firstName}
                    onChange={handleChange}
                    placeholder="firstName"
                    style={{ width: '200px' }} 
                />
                <label className='form-label' htmlFor='lastName'> Last Name:</label>
                <input
                    className='canidate-form-box'
                    type='text'
                    name='lastName'
                    value={formState.lastName || user.lastName}
                    onChange={handleChange}
                    placeholder="last name"
                    style={{ width: '200px' }} 
                />
                <label className='form-label' htmlFor='email'> Email:</label>
                <input
                    className='canidate-form-box'
                    type='text'
                    name='email'
                    value={formState.email || user.email}
                    onChange={handleChange}
                    placeholder="email"
                    style={{ width: '200px' }} 
                />
                <label className='form-label' htmlFor='city'> City:</label>
                <input
                    className='canidate-form-box'
                    type='text'
                    name='userCity'
                    value={formState.userCity || user.userCity}
                    onChange={handleChange}
                    placeholder="city"
                    style={{ width: '200px' }} 
                />
                <label className='form-label' htmlFor='state'> State:</label>
                <input
                    className='canidate-form-box'
                    type='text'
                    name='userState'
                    value={formState.userState || user.userState}
                    onChange={handleChange}
                    placeholder="state"
                    style={{ width: '200px' }} 
                />
                <label className='form-label' htmlFor='education'> Education:</label>
                <input
                    className='canidate-form-box'
                    type='text'
                    name='education'
                    value={formState.education || user.education}
                    onChange={handleChange}
                    placeholder="education"
                    style={{ width: '200px' }} 
                />

                <input className='custom-btn' type='submit' value='Submit' onClick={handleEditSubmit} />
            </form>
        </div>
    );
}
