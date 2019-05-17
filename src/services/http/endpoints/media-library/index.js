import http from '@services/http';
import toResponse from '@helpers/to-response';

export const getMediaLibrary = () => {
  return toResponse(http.get('/media-library'));
};

export const uploadFile = data => {
  return toResponse(http.post('/media/file', data));
};

export const deleteFile = id => {
  return toResponse(http.delete(`/media/file/${id}`));
};

export const createFolder = data => {
  return toResponse(http.post('/media/folders', data));
};

export const renameFile = (id, data) => {
  return toResponse(http.patch(`/media/file/${id}/rename`, data));
};

export const getFileDownloadUrl = id => {
  return toResponse(http.get(`/media/file/${id}/download`));
};

export const getFolderDownloadUrl = id => {
  return toResponse(http.get(`/media/folders/${id}/download`));
};
