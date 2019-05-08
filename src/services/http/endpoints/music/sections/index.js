import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getSection = id => {
  return toResponse(http.get(`/media/folders/${id}`));
};

export const updateSection = (id, data) => {
  return toResponse(http.patch(`/media/folders/${id}`, data));
};
