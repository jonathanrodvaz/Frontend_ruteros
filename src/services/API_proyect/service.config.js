import axios from 'axios';

import { updateToken } from '../../util/updateToken';

const APIHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: `Bearer ${updateToken()}`,
};

export const API = axios.create({
  //baseURL: `http://localhost:8080/api/v1`,
  baseURL: `https://backend-ruteros-omega.vercel.app/api/v1`,
  headers: APIHeaders,
  timeout: 60000,
});

//Original baseURL in line 12: baseURL: `https://backend-dev-link.vercel.app/api/v1`,
