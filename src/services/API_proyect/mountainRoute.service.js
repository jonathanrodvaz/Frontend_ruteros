import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

// ----------------- Get All Mountain Routes from DB -----------
export const getAllMountainRoutes = async () => {
  return API.get('/mountainRoute/')
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

// ----------------- Get MountainRoute by Id from DB -----------
export const getMountainRouteById = async (id) => {
  return API.get(`/mountainRoute/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

// ---------- Toggle the Mountain Route taht the user is interested in -----------
export const mountainRoute_toggleInterestedMountainRouteToUser = async (id) => {
  return API.post(`/mountainRoute/toggleInterestedMountainRouteToUser/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

// ---- Get the Status of the following (interested) offer that the user is interested in -----------
export const mountainRoute_getFollowingStatus = async (id) => {
  return API.get(`/mountainRoute/getMountainRouteFollowingStatus/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const createMountainRoute = async (formData) => {
  return API.post('/mountainRoute/createMountainRoute', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const updateMountainRoute = async (id, formData) => {
  return API.patch(`/mountainRoute/updateMountainRoute/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -----------------------DELETE OFFER -----------------------------------
export const deleteMountainRoute = async (id) => {
  return API.delete(`/mountainRoute/deleteMountainRoute/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
