import React, { useState, useEffect } from 'react';
import Aside from '../components/Aside';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import Alert from 'react-s-alert';
import FolderIcon from '@components/ui-elements/FolderIcon/FolderIcon';
import { getMediaLibrary } from '@endpoints/media-library';
import ReactTable from 'react-table';

const MediaLibrary = () => {
  const [view, toggleView] = useState(true); // true: list, false: grid
  const [mediaLibrary, setData] = useState({});
  useEffect(() => {
    async function fetchResource() {
      const { error, data } = await getMediaLibrary();
      if (!error) {
        setData(data.data.data);
      } else {
        Alert.error(error.response.data.message);
      }
    }
    fetchResource();
  }, []);
  const iconsClasses = {
    list: ['fa', 'fa-list', 'text-3xl'],
    grid: ['fa', 'fa-th', 'text-3xl', 'ml-3'],
  };
  if (!view) {
    iconsClasses.list.push('text-grey-darker');
    iconsClasses.list.push('cursor-pointer');
  } else {
    iconsClasses.grid.push('text-grey-darker');
    iconsClasses.grid.push('cursor-pointer');
  }
  return (
    <div
      className="max-w-content mx-auto pt-4 px-4 md:flex"
      style={{ paddingBottom: '80px' }}>
      <div className="md:w-64 md:mr-10 sm:mb-4">
        <Aside varibleContent="To read more on the best practices when using the AXE music imagery, visit the brand guidelines" />
      </div>
      <div className="flex-grow md:pl-10">
        <div className="mb-5 px-2 flex justify-between items-center">
          <div>
            <PrimaryTitle>Media Library</PrimaryTitle>
          </div>
          <div>
            <button className="uppercase text-white border rounded border-pink px-8 pb-1 pt-2 tracking-wide text-xl">
              Manage Assets
            </button>
          </div>
        </div>
        <div>
          <section className="mb-8">
            <h2 className="text-3xl mb-3">Folders</h2>
            <div className="flex flex-wrap">
              {mediaLibrary.folders
                ? mediaLibrary.folders.data.map(folder => {
                    return (
                      <div
                        className="mb-4 px-2"
                        style={{ flexBasis: '33.33333%' }}
                        key={folder.id}>
                        <FolderIcon name={folder.name} />
                      </div>
                    );
                  })
                : null}
            </div>
          </section>
          <section>
            <div className="flex justify-between">
              <h2 className="text-3xl mb-3">Files</h2>
              <div className="flex">
                <i
                  className={iconsClasses.list.join(' ')}
                  onClick={() => toggleView(true)}
                />
                <i
                  className={iconsClasses.grid.join(' ')}
                  onClick={() => toggleView(false)}
                />
              </div>
            </div>
            {/* <ReactTable /> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;
