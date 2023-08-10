import './mountainRoutesInterested.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { getUserById } from '../../services/API_proyect/user.service';

const MountainRoutesInterested = () => {
  const [mountainRoutes, setMountainRoutes] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userMountainRoute = await getUserById(user._id);
        if (userMountainRoute) {
          setMountainRoutes(userMountainRoute.data.mountainRoutesInterested);
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
      {mountainRoutes.length > 0 ? (
        <ul>
          {mountainRoutes.map((mountainRoute) => (
            <li key={mountainRoute._id}>
              <h3>{mountainRoute.routeName}</h3>
              <p>Descripcion: {mountainRoute.descriptionGeneral}</p>
              <p>Localización: {mountainRoute.routeLocation}</p>
              <p>Dificultad: {mountainRoute.difficulty}</p>
              <p>Estado de la Ruta: {mountainRoute.routeState}</p>
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

export default MountainRoutesInterested;
