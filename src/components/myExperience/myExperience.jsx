import './myExperience.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { getByUserExperience } from '../../services/API_proyect/experience.service';
import DeleteExperienceButton from '../DeleteExperience/DeleteExperience';

const MyExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const { user } = useAuth();

  const fetchExperiences = async () => {
    try {
      const userExperiences = await getByUserExperience(user._id);
      console.log(userExperiences);
      setExperiences(userExperiences);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <section className="experience-p-container_general">
      <h3>Mi experiencia rutera</h3>
      <div className="experience-p-container_general_section">
        {' '}
        {experiences.map((experience, index) => (
          <span key={experience.title + '-' + index}>
            <h4>{experience.title}</h4>
            <div className="card-myExperience">
              {/* <div>
                <img src={experience.image} alt={experience.title} />
              </div> */}
              <div className="experience-p-container">
                <p>
                  {' '}
                  <u>Título:</u>: {experience.title}
                </p>
                <p>
                  {' '}
                  <u>Duración:</u> {experience.duration} año/s
                </p>
                <p>
                  {' '}
                  <u>Tecnologías:</u> {experience.technologies}{' '}
                </p>
                <p>
                  {' '}
                  <u>Descripción:</u> {experience.description}
                </p>
                <DeleteExperienceButton
                  id={experience._id}
                  experiences={experiences}
                  setExperiences={setExperiences}
                />
              </div>
            </div>
          </span>
        ))}
      </div>
    </section>
  );
};

export default MyExperience;
