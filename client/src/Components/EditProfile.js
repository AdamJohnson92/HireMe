import { UserContext } from "../pages/Profile";
import React, { useContext, useState } from "react";

export default function EditCandidate() {
    const user = useContext(UserContext)
    console.log(user.firstName)

    
    const [firstNameForm, setFirstNameForm] = useState(user.firstName || '')
    const [lastNameForm, setLastNameForm] = useState(user.lastName || '')
    const [emailForm, setEmailForm] = useState(user.email || '' )
    const [cityForm, setCityForm] = useState(user.userCity || '')
    const [stateForm, setStateForm] = useState(user.userState || '')
    const [educationForm, setEducationForm] = useState(user.education || '')


    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value


        if (inputName === 'firstName') {
            setFirstNameForm(inputValue)
        } else if (inputName === 'lastName') {
            setLastNameForm(inputValue)
        } else if
            (inputName === 'email') {
            setEmailForm(inputValue)
        } else if (inputName === 'city') {
            setCityForm(inputValue)
        } else if (inputName === 'state') {
            setStateForm(inputValue)
        } else if (inputName === 'education') {
            setEducationForm(inputValue)
        }
    }
    return (
        // must add  onSubmit handler
        <div>
            <form className='edit-candidate' >
                <label className='form-label' htmlFor='firstName'> First Name:
                    <textarea
                        className='canidate-form-box'
                        type='text'
                        name='firstName'
                        value={firstNameForm}
                        onChange={handleInputChange}>
                    </textarea>
                </label>
                <label className='form-label' htmlFor='lastName'> Last Name:
                    <textarea
                        className='canidate-form-box'
                        type='text'
                        name='lastName'
                        value={lastNameForm}
                        onChange={handleInputChange}>
                    </textarea>
                </label>
                <label className='form-label' htmlFor='email'> Email:
                    <textarea
                        className='canidate-form-box'
                        type='text'
                        name='email'
                        value={emailForm}
                        onChange={handleInputChange}>
                    </textarea>
                </label>
                <label className='form-label' htmlFor='city'> City:
                    <textarea
                        className='canidate-form-box'
                        type='text'
                        name='city'
                        value={cityForm}
                        onChange={handleInputChange}>
                    </textarea>
                </label>
                <label className='form-label' htmlFor='state'> State:
                    <textarea
                        className='canidate-form-box'
                        type='text'
                        name='state'
                        value={stateForm}
                        onChange={handleInputChange}>
                    </textarea>
                </label>
                <label className='form-label' htmlFor='education'> Education:
                    <textarea
                        className='canidate-form-box'
                        type='text'
                        name='education'
                        value={educationForm}
                        onChange={handleInputChange}>
                    </textarea>
                </label>


                <input className='btn' type='submit' value='Submit' />
            </form>
        </div>

    )

}