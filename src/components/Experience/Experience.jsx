import './Experience.css';

import React, { useState } from 'react';

import CreateExperienceUser from '../createExperience/createExperience';
import MyExperience from '../myExperience/myExperience';

const Experience = () => {
  const [show, setShow] = useState('create');

  const handleButtonClick = (component) => () => {
    setShow(component);
  };

  return (
    <>
      <section className="btn_profile_general-create-my-experience">
        <div className="experience-btns-container">
          <button className="btn_profile_general" onClick={handleButtonClick('create')}>
            Crear Experiencia
          </button>
          <button className="btn_profile_general" onClick={handleButtonClick('my')}>
            Mis Experiencias
          </button>
        </div>

        {show === 'create' && <CreateExperienceUser />}

        {show === 'my' && <MyExperience />}
      </section>
    </>
  );
};

export default Experience;
