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
      // Must add mutations!!
      //   const { data } = await addThought({
      //     variables: { ...formState },
      //   });

      setSkillForm('');
    } catch (err) {
      console.error(err);
    }
  };

  let skillArray = [];

  function handleSkillArray() {
    if (user.user.skills && Array.isArray(user.user.skills)) {
      for (let i = 0; i < user.user.skills.length; i++) {
        skillArray.push(user.user.skills[i].name);
      }
    } else {
      // Set skillArray as an empty array
      skillArray = [];
    }
    console.log(skillArray);
  }

  handleSkillArray();

  return (
    <div className="candidate-profile" style={{ marginLeft: '30px' }}>
<h2 style={{ color: '#5271FF', marginTop: '90px', textAlign: 'center' }}>Candidate Profile</h2>

      <h1> Hello, {user.user.firstName}!</h1>
      <button className="btn">Edit Profile</button>
      <h3> Location: {user.user.userCity}, {user.user.userState}</h3>
      <h3>Education: {user.user.education}</h3>
      <h3>Skills:</h3>
      <ul>
        {skillArray.map((skill) => (
          <li>
            {skill}
            {!user.isEmployer ? <button className="btn" style={{ width: '10px', height: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: "5px" }}>X</button> : <></>}
                      </li>
        ))}
        {/* {renderSkills()} */}
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
          </textarea>
        </label>
        <br /> 
        <input className='btn' type='submit' value='Submit' />
      </form>
    </div>
  )
}
