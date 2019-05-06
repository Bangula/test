import React, { useState, useEffect, useCallback } from 'react';
import { getSection, updateSection } from '@endpoints/music/sections/';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import Dropzone from '@components/Dropzone/Dropzone';
import { uploadFile, deleteFile } from '@endpoints/media-library';
import Alert from 'react-s-alert';

const commonColumns = [
  {
    headerClassName: 'text-left',
    id: 'name-col',
    Header: 'Filename',
    accessor: 'name',
  },
  {
    headerClassName: 'text-left',
    id: 'format-col',
    Header: 'Format',
    accessor: 'ext',
    Cell: props => {
      const versions = props.original.versions;
      return (
        <div>
          {versions && versions.data.length ? 'Multiple' : `.${props.value}`}
        </div>
      );
    },
  },
  {
    headerClassName: 'text-left',
    id: 'size-col',
    Header: 'Size (bytes)',
    accessor: 'size',
  },
  {
    id: 'actions-col',
    Cell: props => {
      return (
        <div className="text-right">
          <i className="fa fa-pencil-alt" />
          <i
            className="fa fa-trash ml-3"
            onClick={() => deleteFile(props.original.id)}
          />
          <i className="fa fa-download ml-3" />
        </div>
      );
    },
  },
];

const expanderColumnObject = {
  expander: true,
  width: 40,
  Expander: ({ isExpanded, ...rest }) => {
    if (rest.original.versions && rest.original.versions.data.length) {
      return (
        <div className="text-center">
          {isExpanded ? (
            <i className="fa fa-chevron-down text-pink" />
          ) : (
            <i className="fa fa-chevron-right text-pink" />
          )}
        </div>
      );
    } else {
      return <span />;
    }
  },
};

const constructTableColumns = (withExpander, showHeaders) => {
  const columns = commonColumns.map(column => {
    if (showHeaders) {
      return column;
    } else {
      return { ...column, headerClassName: 'hidden' };
    }
  });
  return withExpander ? [expanderColumnObject, ...columns] : columns;
};

const ManageSection = ({ match }) => {
  const [section, setSection] = useState({});
  const [name, setName] = useState('');
  useEffect(() => {
    async function getData(id) {
      const { error, data } = await getSection(id);
      if (!error) {
        setSection(data.data.data);
        setName(data.data.data.name);
      }
    }
    getData(match.params.id);
  }, [match.params.id]);

  const onFileDrop = useCallback(files => {
    files.forEach(async file => {
      const data = new FormData();
      data.append('folder_id', match.params.id);
      data.append('file', file);
      const { error, responseData } = await uploadFile(data);
      if (!error) {
        console.log(responseData);
      } else {
        Alert.error(error.response.data.message);
      }
    });
  }, []);

  const saveChanges = async () => {
    if (name !== section.name) {
      const { error, response } = await updateSection(section.id, { name });
      if (!error) {
        setSection(response.data.data);
      }
    }
  };

  return section.name ? (
    <div className="max-w-content mx-auto pt-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-pink mb-1">Manage Section</h3>
          <input
            onChange={event => setName(event.target.value)}
            style={{ fontSize: '76px', lineHeight: '.88' }}
            className="bg-transparent text-white"
            type="text"
            value={name}
          />
        </div>
        <div>
          <Link to={`/axe-music/${match.params.page}`}>
            <button className="text-xl w-32 border border-pink rounded text-white pt-2 pb-1">
              Cancel
            </button>
          </Link>
          <button
            onClick={saveChanges}
            className="text-xl w-32 bg-pink rounded text-white pt-2 pb-1 ml-3">
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
            columns={constructTableColumns(true, true)}
            pageSize={Math.min(section.files.data.length, 10)}
            SubComponent={row => {
              const versions = row.original.versions;
              return versions && versions.data.length ? (
                <div className="pl-10 pb-5">
                  <ReactTable
                    className="custom-ReactTable"
                    data={versions.data}
                    columns={constructTableColumns(false, false)}
                    showPagination={false}
                    pageSize={Math.min(versions.data.length, 10)}
                  />
                </div>
              ) : null;
            }}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default ManageSection;
