import './cityRoutesInterested.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { getUserById } from '../../services/API_proyect/user.service';

const CityRoutesInterested = () => {
  const [cityRoutes, setCityRoutes] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userCityRoute = await getUserById(user._id);
        if (userCityRoute) {
          setCityRoutes(userCityRoute.data.cityRoutesInterested);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <section className="experience-p-container_general">
      <h3>Rutas en las que estoy interesado/a</h3>
      {cityRoutes.length > 0 ? (
        <ul>
          {cityRoutes.map((cityRoute) => (
            <li key={cityRoute._id}>
              <h3>{cityRoute.routeName}</h3>
              <p>Descripcion: {cityRoute.descriptionGeneral}</p>
              <p>Localización: {cityRoute.routeLocation}</p>
              <p>Dificultad: {cityRoute.difficulty}</p>
              <p>Estado de la Ruta: {cityRoute.routeState}</p>
              {/* <p>Equipo Recomendado: {mountainRoute.itemsToCarry.join(', ')}</p> */}
            </li>
          ))}
        </ul>
      ) : (
        <p className="offer-create-container_general_no_ofertas">
          No hay Rutas en las que estés interesado/a.
        </p>
      )}
    </section>
  );
};

export default CityRoutesInterested;
