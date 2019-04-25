import axios from 'axios';

import { API_URL } from './config';

import { authRequest, authResponse } from './interceptors/authentication';

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use(authRequest);
http.interceptors.response.use(...authResponse);

export default http;
