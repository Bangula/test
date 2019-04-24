import http from '@services/http';
import toResponse from '@helpers/to-response';

export const fetchAllUsers = () => toResponse(http.get('/users'));
