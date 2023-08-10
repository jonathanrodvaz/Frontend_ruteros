import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

// ----------------- Get All Cities from DB -----------
export const city_getAll = async () => {
  return API.get('/city/')
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

// ----------------- Get Cities by Id from DB -----------
export const getCityById = async (id) => {
  return API.get(`/city/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

// ---------- Toggle the offer taht the user is interested in -----------
export const toggleInterestedCityToUser = async (id) => {
  return API.post(`/city/toggleInterestedCityToUser/${id}`, {
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
export const getCityFollowingStatus = async (id) => {
  return API.get(`/city/cityFollowingStatus/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const createCity = async (formData) => {
  return API.post('/city/createCity', formData, {
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

export const updateCity = async (id, formData) => {
  return API.patch(`/city/updateCity/${id}`, formData, {
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
export const deleteCity = async (id) => {
  return API.delete(`/city/deleteCity/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
