import './createExperience.css';

import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { habilitiesArr } from '../../data/object.habilities';
import handleExperienceResponse from '../../hooks/useExperience';
import { createExperience } from '../../services/API_proyect/experience.service';
import Uploadfile from '../Uploadfile';

const createExperienceUser = () => {
  const { register, handleSubmit } = useForm();
  const [experienceData] = useState({
    title: '',
    duration: 0,
    habilities: [],
    description: '',
  });

  const [arrayHability, setArrayHability] = useState([]);

  const fileInput = useRef();

  const formSubmit = async (formData) => {
    const file = fileInput.current.files[0];

    formData = { ...formData, habilities: arrayHability };

    if (file) {
      formData = { ...formData, image: file };
    }
    try {
      const res = await createExperience(formData);
      handleExperienceResponse(res);
    } catch (err) {
      handleExperienceResponse(err.response);
    }
  };

  const createArrayHabilities = ({ target }) => {
    if (arrayHability.includes(target.id)) {
      setArrayHability((value) => {
        const customArray = [];
        value.forEach((element) => {
          if (target.id != element) customArray.push(element);
        });
        return customArray;
      });
    } else {
      setArrayHability((value) => {
        const customArray = [...value, target.id];
        return customArray;
      });
    }
  };

  useEffect(() => {
    console.log('🍟', arrayHability);
  }, [arrayHability]);

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)} className="form_Create">
        <section className="form_Create-empresa-duracion-descripcion">
          <div className="form-empresa-duracion">
            <label className="form-label-empresa form-label-global-empresa-duracion">
              <input
                className="form-input-empresa"
                type="text"
                placeholder="Ruta"
                name="title"
                {...register('title', { required: true })}
              />
            </label>

            <label className="form-label-duracion form-label-empresa-duracion">
              <input
                className="form-input-duracion"
                type="number"
                min="0"
                max="50"
                placeholder={experienceData.duration ? '' : 'Duración'}
                name="duration"
                {...register('duration')}
              />
            </label>
          </div>

          <label className="form-label">
            <input
              className="form-input-description-input"
              type="text"
              placeholder="Descripción"
              name="description"
              {...register('description')}
            />
          </label>
        </section>

        <section className="Create_Experiencia-tecnologías-Uploadfile_photo_profile">
          <label className="form-label-Create_Experiencia-tecnologías-Uploadfile_photo_profile">
            {' '}
            Habilidades
            <div className="createExperience-habilities">
              {habilitiesArr.map((hability) => (
                <figure
                  key={hability.name}
                  className="createExperience-habilities-item"
                  id={hability.name}
                >
                  <div className="image-container">
                    <img
                      className="tech-image"
                      src={hability.image}
                      alt={hability.name}
                    />
                  </div>
                  <p className="tech-image-text">{hability.name}</p>
                  <input
                    type="checkbox"
                    name={hability.name}
                    id={hability.name}
                    onChange={createArrayHabilities}
                  />
                </figure>
              ))}
            </div>
          </label>
          <div className="form-Uploadfile_photo_profile">
            <Uploadfile
              className="form-Uploadfile_photo_profile"
              registerForm={{ ref: fileInput }}
            />
          </div>
        </section>
        <button type="submit" className="btn_profile_general">
          GUARDAR EXPERIENCIA
        </button>
      </form>
    </>
  );
};

export default createExperienceUser;
