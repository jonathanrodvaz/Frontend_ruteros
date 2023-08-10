import React from 'react';

import handleMountainRouteDeletionResponse from '../../hooks/useDeleteMountainRoute';
import { deleteMountainRoute } from '../../services/API_proyect/mountainRoute.service';

const DeleteMountainRouteButton = ({ id, mountainRoutes, setMountainRoutes }) => {
  const handleDeleteMountainRoute = async (id) => {
    const res = await deleteMountainRoute(id);
    handleMountainRouteDeletionResponse(res);
    if (res.status === 200) {
      setMountainRoutes(
        mountainRoutes.filter((mountainRoute) => mountainRoute._id !== id),
      );
    }
  };

  return (
    <button
      className="btn_profile_general btn_profile_general_delete_expe"
      onClick={() => handleDeleteMountainRoute(id)}
    >
      Borrar Ruta
    </button>
  );
};

export default DeleteMountainRouteButton;
