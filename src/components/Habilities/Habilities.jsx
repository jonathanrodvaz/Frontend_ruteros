import './Habilities.css';

import React from 'react';
import { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { habilitiesArr } from '../../data/object.habilities';
import handleHabilitiesUpdateResponse from '../../hooks/UseSaveHabilities';
import { getUserById, updateHabilities } from '../../services/API_proyect/user.service';
import ToggleHabilities from '../ToggleHabilities/ToggleHabilities';

const Habilities = () => {
  const [arrayHabilities, setArrayHabilities] = useState(() => []);
  const [send, setSend] = useState(false);
  const [res, setRes] = useState(null);
  const [resInit, setResInit] = useState(null);
  const { user } = useAuth();

  const handleServiceAdd = async () => {
    setSend(true);
    const updateRes = await updateHabilities({ habilities: arrayHabilities });
    setRes(updateRes);
    handleHabilitiesUpdateResponse(updateRes);
    setSend(false);
  };

  const userById = async () => {
    setSend(true);
    setResInit(await getUserById(user._id));
    setSend(false);
  };

  useEffect(() => {
    if (resInit == null) userById();
  }, []);

  useEffect(() => {
    if (resInit?.status == 200) {
      setArrayHabilities(resInit.data.habilities);
    }
  }, [resInit]);

  useEffect(() => {
    console.log(arrayHabilities);
  }, [arrayHabilities]);

  useEffect(() => {
    if (res?.status == '200') {
      setArrayHabilities(res.data.newUser.habilities);
    }
  }, [res]);

  return (
    <>
      <section className="habilities-choose-habilities-container">
        {/* <p className="choose_technologies-container-choose">
          Selecciona tus habilidades ruteras
        </p> */}
        <div className="habilities-habilities-container">
          {habilitiesArr.map((hability, index) => (
            <div
              key={`${hability.name}-${index}`}
              className="habilities-hability-item"
              id={hability.name}
            >
              <div className="image-container">
                <img className="tech-image" src={hability.image} alt={hability.name} />
              </div>
              <p className="tech-image-text">{hability.name}</p>
              <ToggleHabilities
                setArrayHabilities={setArrayHabilities}
                arrayHabilities={arrayHabilities}
              />
            </div>
          ))}
          <button
            className="btn_profile_general btn_profile_general_tech"
            onClick={() => handleServiceAdd()}
            disabled={send}
          >
            {' '}
            GUARDAR
          </button>
        </div>
      </section>
    </>
  );
};

export default Habilities;
