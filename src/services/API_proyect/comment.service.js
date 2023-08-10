import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

export const createComment = async (data) => {
  return API.post('/comment', data, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getAll = async () => {
  return API.get('/comment')
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const deleteComment = async (id) => {
  return API.delete(`/comment/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const getByReference = async (refType, id) => {
  return API.get(`/comment/${refType}/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const toggleFavoriteComment = async (id, formdata) => {
  return API.put(`/comment/favorite/${id}`, formdata, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
