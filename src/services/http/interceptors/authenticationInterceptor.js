export default function authInterceptor(config) {
  const token = localStorage.getItem('access_token_name');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
}
