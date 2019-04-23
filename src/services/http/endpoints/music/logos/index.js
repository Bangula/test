import http from '@services/http';
import toResponse from '@helpers/to-response';

const logos = {
  object: 'Logos',
  sections: {
    data: [
      {
        name: 'Axe Music Logos',
        id: 'qnwmkv5704blag6r',
        files: {
          data: [
            {
              id: 'qmv7dk48x5b690wx',
              name: 'axe_music_1',
              ext: 'jpg',
              filename: '1/1/axe_music_1.jpg',
              url: 'api.axe.docker/storage/1/1/axe_music_1.jpg',
              versions: {
                data: [
                  {
                    id: 'qmv7dk48x5b690',
                    name: 'axe_music_1',
                    ext: 'eps',
                    filename: '1/1/axe_music_1.eps',
                    url: 'api.axe.docker/storage/1/1/axe_music_1.eps',
                  },
                  {
                    id: 'qmk48x5b690',
                    name: 'axe_music_1',
                    ext: 'ai',
                    filename: '1/1/axe_music_1.ai',
                    url: 'api.axe.docker/storage/1/1/axe_music_1.ai',
                  },
                ],
              },
            },
            {
              id: 'qmv7dk48x5b690',
              name: 'axe_music_1',
              ext: 'jpg',
              filename: '1/1/axe_music_1.jpg',
              url: 'api.axe.docker/storage/1/1/axe_music_1.jpg',
              versions: {
                data: [
                  {
                    id: 'qmv7dk48x690',
                    name: 'axe_music_1',
                    ext: 'eps',
                    filename: '1/1/axe_music_1.eps',
                    url: 'api.axe.docker/storage/1/1/axe_music_1.eps',
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: 'qmv7dk48x5b690wx',
        name: 'Lynx music logos',
        files: {
          data: [
            {
              id: 'ao6grd4ed38kyeqz',
              name: 'lynx_music_1',
              ext: 'jpg',
              filename: '1/2/lynx_music_1.jpg',
              versions: {
                data: [
                  {
                    id: 'w6l8b75dy5qkv9ze',
                    name: 'lynx_music_1',
                    ext: 'eps',
                    filename: '1/2/lynx_music_1.eps',
                    url: 'api.axe.docker/storage/1/2/lynx_music_1.eps',
                  },
                  {
                    id: '8ykwxd4gx3ampj9v',
                    name: 'lynx_music_1',
                    ext: 'ai',
                    filename: '1/2/lynx_music_1.ai',
                    url: 'api.axe.docker/storage/1/2/lynx_music_1.ai',
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

export const getLogos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: logos });
    }, 0);
  });
  // return toResponse(http.post('/logos'));
};
