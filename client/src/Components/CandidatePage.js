import { UserContext } from "../pages/Home";
import Skill from './Skill'
import React, { useContext, useState } from "react";

export default function CandidatePage() {

    const user = useContext(UserContext)
    const [skillForm, setSkillForm] = useState('')
    const [eduForm, setEduForm] = useState('')
    //useMutation to edit skills/education
    //must add onChange and onSubmit handlers!

    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value
    
    
        if (inputName === 'addEducation') {
          setEduForm(inputValue)
          console.log(inputValue)
        } else if (inputName === 'addSkill') {
          setSkillForm(inputValue)
          console.log(inputValue)
        }
      }

      const handleSkillSubmit = async (event) => {
        event.preventDefault();
    
        try { 
            //Must add mutations!!
        //   const { data } = await addThought({
        //     variables: { ...formState },
        //   });
       
          setSkillForm('');
        } catch (err) {
          console.error(err);
        }
      };


    return (
        <>
            <h2>Candidate Profile</h2>

            <h1> Hello, {user.firstName}!</h1>
            <button className="btn">Edit Profile</button>
            <h3> Location: {user.locationCity}, {user.locationState}</h3>
            <h4>Education: {user.education}</h4>
            <h3>Skills:</h3>
            <ul>
                <Skill></Skill>
            </ul>

            <form className="skill-form" onSubmit={handleSkillSubmit}>
                <label className='form-label' htmlFor='message'>
                    <textarea
                        className='canidate-form-box'
                        type='text'
                        name='addSkill'
                        placeholder="Add a Skill"
                        value={skillForm || ''}
                        onChange={handleInputChange}
                    >
                    </textarea></label>

                <input className='btn' type='submit' value='Submit' />
            </form>
        </>
    )
}