import Skill from './Skill'
import { UserContext } from '../pages/Profile';
import { useMutation} from "@apollo/client";
import React, { useContext, useState, useEffect, createContext } from "react";
import { QUERY_ME } from "../utils/queries";
import JohnWick from "../assets/JohnWick.jpg";
import { ADD_SKILL } from "../utils/mutations";


export default function CandidatePage() {

  const user = useContext(UserContext)
  const [skillForm, setSkillForm] = useState('');
  const [skills, setSkills] = useState([]);

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === 'addSkill') {
      setSkillForm(inputValue);
    }
  }
  const [addSkillMutation] = useMutation(ADD_SKILL);

  const handleSkillSubmit = (event) => {
    event.preventDefault();

    try {
      addSkillMutation({
        variables: {
          email: user.email,
          newSkill: skillForm,
        },
        // Update the cache to include the newly added skill
        update: (cache, { data }) => {
          const updatedUser = data.addSkill;
          cache.writeQuery({
            query: QUERY_ME,
            data: {
              me: updatedUser,
            },
          });
        },
      });

      setSkillForm("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user.skills && Array.isArray(user.skills)) {
      const skillNames = user.skills.map((skill) => skill.name);
      setSkills(skillNames);
    } else {
      setSkills([]);
    }
  }, [user.skills]);

  return (
    <div className="candidate-profile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '275px' }}>
      <div style={{ marginLeft: '30px' }}>
        <h1> Hello, {user.firstName}!</h1>
        <button className="btn">Edit Profile</button>
        <h3> Location: {user.userCity}, {user.userState}</h3>
        <h3>Education: {user.education}</h3>
        <h3>Skills:</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill}
              {!user.isEmployer ? <button className="btn" style={{ width: '10px', height: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: "5px" }}>X</button> : <></>}
            </li>
          ))}
        </ul>

        <form className="skill-form" onSubmit={handleSkillSubmit}>
          <label className='form-label' htmlFor='addSkill'>
            <textarea
              className='candidate-form-box'
              type='text'
              id='addSkill'
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

      {/* Profile Image with marginTop */}
      <img
        src={JohnWick}
        alt="ProfileImage"
        style={{
          width: '200px',
          height: '210px',
          borderRadius: '50%',
          marginRight: '70px',
          marginTop: '-200px', // this moves the image up (or down)
        }}
      />
    </div>
  );
}
