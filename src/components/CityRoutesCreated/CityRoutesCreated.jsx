import './CityRoutesCreated.css';

import React, { useEffect, useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { updateCity } from '../../services/API_proyect/city.service';
import { getUserById } from '../../services/API_proyect/user.service';
import DeleteCityRouteButton from '../DeleteCityRoute/DeleteCityRoute';

const CityRoutesCreated = () => {
  const [cityRoutes, setCityRoutes] = useState([]);
  const { user } = useAuth();

  const handleCityRouteStateChange = async (cityRouteId, newCityRouteState) => {
    try {
      const formData = new FormData();
      formData.append('cityRouteState', newCityRouteState);
      await updateCity(cityRouteId, formData);
      setCityRoutes(
        cityRoutes.map((city) => {
          if (city._id === cityRouteId) {
            return {
              ...cityRoutes,
              cityRouteState: newCityRouteState,
            };
          }
          return cityRoutes;
        }),
      );
    } catch (error) {
      console.error('Error al cambiar el estado de la ruta de ciudad:', error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userCityRoute = await getUserById(user._id);

        console.log(userCityRoute);
        if (userCityRoute) {
          setCityRoutes(userCityRoute.data.cityRoutesCreated);
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
      {cityRoutes.length > 0 ? (
        <ul>
          {cityRoutes.map((cityRouteSingle) => (
            <li key={cityRouteSingle._id}>
              <h3>{cityRouteSingle.routeName}</h3>
              <p>Descripción: {cityRouteSingle.descriptionGeneral}</p>
              <p>Localización: {cityRouteSingle.routeLocation}</p>
              <p>Dificultad: {cityRouteSingle.difficulty}</p>
              <p>
                Estado de la ruta:
                <select
                  className="select-offer-change-state"
                  value={cityRouteSingle.routeState}
                  onChange={(e) =>
                    handleCityRouteStateChange(cityRouteSingle._id, e.target.value)
                  }
                >
                  <option value="Close">Close</option>
                  <option value="Suspended">Suspended</option>
                  <option value="Open">Open</option>
                </select>
              </p>
              {/* <p>Equipo recomendado: {mountainRoute.itemsToCarry.join(', ')}</p> */}
              <DeleteCityRouteButton
                id={cityRouteSingle._id}
                cityRoutes={cityRoutes}
                setCityRoutes={setCityRoutes}
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

export default CityRoutesCreated;
