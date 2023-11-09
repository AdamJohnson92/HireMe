import Skill from './Skill'
import { UserContext } from '../pages/Profile';
import { useMutation } from "@apollo/client";
import React, { useContext, useState, useEffect, createContext } from "react";
import { QUERY_ME } from "../utils/queries";
import JohnWick from "../assets/JohnWick.jpg";
import JohnWicksResume from "../assets/JohnWickResume.pdf"; // Import John Wick's resume PDF
import EditCandidate from './EditProfile';

import { ADD_SKILL, REMOVE_SKILL } from "../utils/mutations";


export default function CandidatePage() {

  const user = useContext(UserContext)
  const [skillForm, setSkillForm] = useState('');
  const [skills, setSkills] = useState([]);
  const [editDisplay, setEditDisplay] = useState('hidden')
  const [showResumePopup, setShowResumePopup] = useState(false); // To control resume popup visibility

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === 'addSkill') {
      setSkillForm(inputValue);
    }
  }
  const [addSkillMutation] = useMutation(ADD_SKILL);

  // Make the handleSkillSubmit function async
  const handleSkillSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addSkillMutation({
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
      console.log(data.addSkill)
      setSkillForm("");
    } catch (err) {
      console.error(err);
    }
  };


  const [removeSkill] = useMutation(REMOVE_SKILL);

  const handleRemoveSkill = async (skill) => {
    try {
      const { data } = await removeSkill({
        variables: { email: user.email, oldSkill: skill },
        update: (cache, { data }) => {
          const updatedUser = data.removeSkill;
          cache.writeQuery({
            query: QUERY_ME,
            data: {
              me: updatedUser,
            },
          });
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user.skills && Array.isArray(user.skills)) { // Access skills directly from the user object
      const skillNames = user.skills.map((skill) => skill.name);
      setSkills(skillNames);
    } else {
      setSkills([]);
    }
  }, [user.skills]);

  const handleViewResumeClick = () => {
    // When the "View Resume 📄" button is clicked, open the popup
    setShowResumePopup(true);
  };

  const handleClosePopup = () => {
    // Close the resume popup when the user clicks close or outside the popup
    setShowResumePopup(false);
  };

  const handleResumeUpload = (event) => {
    // Handle the file upload here
    const file = event.target.files[0];
    // You can add your logic for handling the uploaded file, e.g., send it to a server or display it.
  };

  function openEditor() {
    setEditDisplay('edit-candidate')
    console.log(editDisplay)
  }

  return (
    <div className="candidate-profile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '100px' }}>
      <div style={{ marginLeft: '80px' }}>
        <h1> Hello, {user.firstName}!</h1>
        <button className="btn" onClick={() => openEditor()}>Edit Profile</button>
        <h3 style={{ marginLeft: '120px' }}> Location: {user.userCity}, {user.userState}</h3>
        <h3 style={{ marginLeft: '120px' }}>Education: {user.education}</h3>
        <h3 style={{ marginLeft: '120px' }}>Skills:</h3>
        <ul style={{ marginLeft: '120px' }}>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill}
              {!user.isEmployer ? <button className="btn" style={{ width: '10px', height: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: "5px" }} onClick={() => handleRemoveSkill(skill)}>X</button> : <></>}
            </li>
          ))}
        </ul>

        <form className='skill-form' onSubmit={handleSkillSubmit} style={{ marginLeft: '120px' }}>
          <label className='form-label' htmlFor='addSkill'>
            <textarea
              className='candidate-form-box'
              type='text'
              id='addSkill'
              name='addSkill'
              placeholder="Add a Skill"
              value={skillForm || ''}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <br />
          <input className='btn' type='submit' value='Submit' />
        </form>

        {/* View Resume and Upload Resume Buttons */}
        <button className='btn' onClick={handleViewResumeClick} style={{ marginLeft: '120px' }}>
          View Resume 📄
        </button>
        <br />
        <br />
        <input type="file" accept=".pdf" onChange={handleResumeUpload} style={{ marginLeft: '120px' }} />
      </div>

      {/* Profile Image */}
      <img
        src={JohnWick}
        alt="ProfileImage"
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          marginRight: '-375px',
          marginTop: '-275px', // this moves the image up (or down)
        }}
      />
      
      <EditCandidate editDisplay={editDisplay} setEditDisplay={setEditDisplay}></EditCandidate>

      {/* Resume Popup */}
      {showResumePopup && (
        <div className='resume-popup'>
          <button onClick={handleClosePopup} className='close-popup'>
            Close
          </button>
          {/* Display John Wick's Resume PDF */}
          <embed src={JohnWicksResume} type='application/pdf' width='100%' height='500px' />
        </div>
      )}

    </div>
  );
}
