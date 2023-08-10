import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

// ----------------- Get All Developers from DB -----------
export const developer_getAll = async () => {
  return API.get('/users/')
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

// ----------------- Get one developer by Id from DB -----------
export const developer_getById = async (id) => {
  return API.get(`/users/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

// ----------------- Following/Follower -----------
export const developer_following_follower = async (id) => {
  return API.patch(`/users/following/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

// ----------------- Get Status Fav -----------
export const getFollowingStatus = async (id) => {
  return API.get(`/users/followingStatus/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
