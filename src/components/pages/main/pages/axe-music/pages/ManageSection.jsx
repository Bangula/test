import React, { useState, useEffect, useCallback } from 'react';
import PrimaryTitle from '@components/ui-elements/PrimaryTitle/PrimaryTitle';
import { getSection } from '@endpoints/music/sections/';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import Dropzone from '@components/Dropzone/Dropzone';

const columns = [
  {
    id: 'name-col',
    Header: 'Filename',
    accessor: 'name',
  },
  {
    id: 'format-col',
    Header: 'Format',
    accessor: 'ext',
  },
  {
    id: 'size-col',
    Header: 'Size (B)',
    accessor: 'size',
  },
];

const ManageSection = ({ match }) => {
  const [section, setSection] = useState({});
  useEffect(() => {
    async function getData(id) {
      const { error, data } = await getSection(id);
      if (!error) {
        console.log(data.data.data);
        setSection(data.data.data);
      }
    }
    getData(match.params.id);
  }, [match.params.id]);

  const onFileDrop = useCallback(files => {
    console.log(files);
  }, []);

  return section.name ? (
    <div className="max-w-content mx-auto pt-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-pink mb-1">Manage Section</h3>
          <PrimaryTitle>{section.name}</PrimaryTitle>
        </div>
        <div>
          <Link to={`/axe-music/${match.params.page}`}>
            <button className="text-xl w-32 border border-pink rounded text-white pt-2 pb-1">
              Cancel
            </button>
          </Link>
          <button className="text-xl w-32 bg-pink rounded text-white pt-2 pb-1 ml-3">
            Save
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="pr-3">
          <h3 className="uppercase text-pink mb-2">Upload assets:</h3>
          <Dropzone onDrop={onFileDrop} />
        </div>
        <div className="flex-1 pl-3">
          <ReactTable
            className="custom-ReactTable"
            data={section.files.data || []}
            columns={columns}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default ManageSection;
