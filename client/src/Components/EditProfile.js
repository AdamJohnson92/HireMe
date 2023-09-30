import { UserContext } from "../pages/Home";
import React, { useContext, useState } from "react";

export default function CandidatePage() {
    const user = useContext(UserContext)
    return (
        // must add onSubmit handler
        <form className="edit-candidate-form" >
            <label className='form-label' htmlFor='firstName'> First Name:
                <textarea
                    className='canidate-form-box'
                    type='text'
                    name='firstName'
                    defaultValue={user.firstName}
                    value={firstNameForm || ''}>
                </textarea>
            </label>
            <label className='form-label' htmlFor='lastName'> Last Name: 
                <textarea
                    className='canidate-form-box'
                    type='text'
                    name='lastName'
                    defaultValue={user.lastName}
                    value={lastNameForm || ''}>
                </textarea>
            </label>
            <label className='form-label' htmlFor='email'> Email:
                <textarea
                    className='canidate-form-box'
                    type='text'
                    name='email'
                    defaultValue={user.email}
                    value={emailForm || ''}>
                </textarea>
            </label>
            <label className='form-label' htmlFor='city'> City:
                <textarea
                    className='canidate-form-box'
                    type='text'
                    name='city'
                    defaultValue={user.city}
                    value={cityForm || ''}>
                </textarea>
            </label>
            <label className='form-label' htmlFor='state'> State:
                <textarea
                    className='canidate-form-box'
                    type='text'
                    name='state'
                    defaultValue={user.state}
                    value={stateForm || ''}>
                </textarea>
            </label>
            <label className='form-label' htmlFor='education'> Education:
                <textarea
                    className='canidate-form-box'
                    type='text'
                    name='education'
                    defaultValue={user.education}
                    value={educationForm || ''}>
                </textarea>
            </label>


            <input className='btn' type='submit' value='Submit' />
        </form>
    )
}