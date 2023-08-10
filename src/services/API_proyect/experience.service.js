import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

//! -----------------------CREATE EXPERIENCE-----------------------------------
export const createExperience = async (formData) => {
  return API.post('/experience/create', formData, {
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

//! -----------------------GET ALL EXPERIENCES -----------------------------------
export const experiences_getAll = async () => {
  return API.get('/experience')
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

//! -----------------------DELETE EXPERIENCE-----------------------------------
export const deleteExperience = async (id) => {
  return API.delete(`/experience/deleteExperience/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -----------------------GET BY ID -----------------------------------
export const getByIdExperience = async (id) => {
  return API.get(`/${id}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -----------------------GET BY USER-----------------------------------

export const getByUserExperience = async (id) => {
  return API.get(`/experience/experience/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};
