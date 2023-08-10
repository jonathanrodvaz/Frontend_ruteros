import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

export const createRating = async (data) => {
  return API.post('/rating', data, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const updateRating = async (data, id) => {
  return API.patch(`/rating/${id}`, data, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getByReference = async (type, idOfRatingType) => {
  return API.get(`/rating/${type}/${idOfRatingType}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getCityRouteRating = async (idOfCityToRate) => {
  return API.get(`/rating/getCityRouteRating/${idOfCityToRate}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
