import { UserContext } from "../pages/Home";
import Skill from './Skill'
import { useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { QUERY_ME } from "../utils/queries";

export default function CandidatePage(user) {
  console.log(user.user)

  console.log(user.user.skills)

  // const user = useContext(UserContext)
  const [skillForm, setSkillForm] = useState('')


  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value


    if (inputName === 'addSkill') {
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
    <div className="candidate-profile">
      <h2>Candidate Profile</h2>

      <h1> Hello, {user.user.firstName}!</h1>
      <button className="btn">Edit Profile</button>
      <h3> Location: {user.user.userCity}, {user.user.userState}</h3>
      <h4>Education: {user.user.education}</h4>
      <h3>Skills:</h3>
      <ul>
        {user.user.skills.map((skill) => (
          <li>
            {skill.name}
            {!user.isEmployer ? <button className="btn"> X </button> : <></>}
          </li>
        ))}
      </ul>

      <form className="skill-form" onSubmit={handleSkillSubmit}>
        <label className='form-label' htmlFor='skill'>
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
    </div>
  )
}