import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getMediaLibrary = id => {
  return toResponse(http.get(`/media/library/${id}`));
};
