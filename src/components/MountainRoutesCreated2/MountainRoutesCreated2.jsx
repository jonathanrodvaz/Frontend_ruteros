import './MountainRoutesCreated2.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { updateMountainRoute } from '../../services/API_proyect/mountainRoute.service';
import { getUserById } from '../../services/API_proyect/user.service';
import DeleteMountainRouteButton from '../DeleteMountainRoute/DeleteMountainRoute';

const MountainRoutesCreated2 = () => {
  const [mountainRoute, setMountainRoutes] = useState([]);
  const { user } = useAuth();

  const handleMountainRouteStateChange = async (
    mountainRouteId,
    newMountainRouteState,
  ) => {
    try {
      const formData = new FormData();
      formData.append('mountainRouteState', newMountainRouteState);
      await updateMountainRoute(mountainRouteId, formData);
      setMountainRoutes(
        mountainRoute.map((mountain) => {
          if (mountain._id === mountainRouteId) {
            return {
              ...mountainRoute,
              mountainRouteState: newMountainRouteState,
            };
          }
          return mountainRoute;
        }),
      );
    } catch (error) {
      console.error('Error al cambiar el estado de la ruta de ciudad:', error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userMountainRoute = await getUserById(user._id);

        console.log(userMountainRoute);
        if (userMountainRoute) {
          setMountainRoutes(userMountainRoute.data.mountainRoutesCreated);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <section className="offer-create-container_general experience-p-container_general">
      <h3>Rutas Creadas</h3>
      {mountainRoute.length > 0 ? (
        <ul>
          {mountainRoute.map((mountainRouteSingle) => (
            <li key={mountainRouteSingle._id}>
              <h3>{mountainRouteSingle.routeName}</h3>
              <p>Descripción: {mountainRouteSingle.descriptionGeneral}</p>
              <p>Localización: {mountainRouteSingle.routeLocation}</p>
              <p>Dificultad: {mountainRouteSingle.difficulty}</p>
              <p>
                Estado de la ruta:
                <select
                  className="select-offer-change-state"
                  value={mountainRouteSingle.routeState}
                  onChange={(e) =>
                    handleMountainRouteStateChange(
                      mountainRouteSingle._id,
                      e.target.value,
                    )
                  }
                >
                  <option value="Close">Close</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Open">Open</option>
                </select>
              </p>
              {/* <p>Equipo recomendado: {mountainRoute.itemsToCarry.join(', ')}</p> */}
              <DeleteMountainRouteButton
                id={mountainRouteSingle._id}
                mountainRoute={mountainRouteSingle}
                setMountainRoutes={setMountainRoutes}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="offer-create-container_general_no_ofertas">No hay rutas creadas.</p>
      )}
    </section>
  );
};

export default MountainRoutesCreated2;
