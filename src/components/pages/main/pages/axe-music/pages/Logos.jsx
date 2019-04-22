import React from 'react';
import Aside from '../components/Aside';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import MediaCard from '@components/ui-elements/MediaCard/MediaCard';

const data = {
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

export default () => {
  return (
    <div
      className="flex max-w-content mx-auto pt-8"
      style={{ paddingBottom: '80px' }}>
      <div className="w-64 mr-10">
        <Aside varibleContent="To read more on the best practices when using the AXE music logos, visit the brand guidelines" />
      </div>
      <div className="flex-grow pl-10">
        <div className="mb-5 px-4">
          <PrimaryTitle>Logos</PrimaryTitle>
        </div>
        {data.sections.data.map(section => {
          return (
            <section key={section.id} className="mb-8">
              <div className="flex items-center justify-between mb-5 px-4">
                <h1 className="uppercase">{section.name}:</h1>
                <button className="uppercase text-white border rounded border-tirques px-5 pb-1 pt-2 tracking-wide text-xl">
                  <i className="fa fa-download mr-4" />
                  Download all
                </button>
              </div>
              <div className="flex flex-wrap">
                {section.files.data.map(file => (
                  <div
                    className="px-4 mb-5"
                    style={{ flexBasis: '25%' }}
                    key={file.id}>
                    <MediaCard file={file} object={data.object} />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
