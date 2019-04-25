import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getCreativeAssets = () => {
  return toResponse(http.get('/assets'));
};