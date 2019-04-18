import axios from 'axios';

import { API_URL } from './config';

import authenticationInterceptor from './interceptors/authenticationInterceptor';

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use(authenticationInterceptor);

export default http;
