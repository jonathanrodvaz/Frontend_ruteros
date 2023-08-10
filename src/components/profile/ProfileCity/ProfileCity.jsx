import './ProfileCity.css';

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import CityRoutesCreated from '../../CityRoutesCreated/CityRoutesCreated';
import CityRoutesInterested from '../../CityRoutesInterested/cityRoutesInterested';

const ProfileCity = () => {
  const [showCreated, setShowCreated] = useState(true);

  const handleShowCreated = () => {
    setShowCreated(true);
  };

  const handleShowInterested = () => {
    setShowCreated(false);
  };

  return (
    <section className="Offers-Btn-filter">
      <div className="profileCity-btns">
        <button className="btn_profile_general" onClick={handleShowCreated}>
          Mis rutas
        </button>

        <NavLink to="/createCities2">
          <button className="btn_profile_general">Crear Ruta</button>
        </NavLink>

        <button className="btn_profile_general" onClick={handleShowInterested}>
          Rutas que sigo
        </button>
      </div>

      {showCreated ? <CityRoutesCreated /> : <CityRoutesInterested />}
    </section>
  );
};

export default ProfileCity;
