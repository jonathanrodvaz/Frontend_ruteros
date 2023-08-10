import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

export const createChat = async (formData) => {
  return API.post('/chat/create', formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

export const createMasChat = async (formData) => {
  return API.post('/chat/create/masNewComment', formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
