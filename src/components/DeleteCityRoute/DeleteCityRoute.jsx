import React from 'react';

import handleCityRouteDeletionResponse from '../../hooks/useDeleteCityRoute';
import { deleteCity } from '../../services/API_proyect/city.service';

const DeleteCityRouteButton = ({ id, cityRoutes, setCityRoutes }) => {
  const handleDeleteCityRoute = async (id) => {
    const res = await deleteCity(id);
    handleCityRouteDeletionResponse(res);
    if (res.status === 200) {
      setCityRoutes(cityRoutes.filter((cityRoute) => cityRoute._id !== id));
    }
  };

  return (
    <button
      className="btn_profile_general btn_profile_general_delete_expe"
      onClick={() => handleDeleteCityRoute(id)}
    >
      Borrar Ruta
    </button>
  );
};

export default DeleteCityRouteButton;
