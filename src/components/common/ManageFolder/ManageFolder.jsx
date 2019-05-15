import React from 'react';
import { getSection, updateSection } from '@endpoints/music/sections/';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import Dropzone from '@components/Dropzone/Dropzone';
import { uploadFile, deleteFile, renameFile } from '@endpoints/media-library';
import Alert from 'react-s-alert';
import RenameFile from '@components/RenameFile/RenameFile';

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
    id: 'rename-col',
    headerClassName: 'hidden',
    Header: 'Rename',
    width: 28,
    Cell: () => (
      <div>
        <i className="fa fa-pencil-alt cursor-pointer" />
      </div>
    ),
  },
  {
    id: 'delete-col',
    headerClassName: 'hidden',
    Header: 'Delete',
    width: 28,
    Cell: () => (
      <div>
        <i className="fa fa-trash cursor-pointer" />
      </div>
    ),
  },
  {
    id: 'download-col',
    width: 28,
    Cell: () => (
      <div>
        <i className="fa fa-download cursor-pointer" />
      </div>
    ),
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

const ManageFolder = ({ match, cancelUrl }) => {
  const [section, setSection] = React.useState({});
  const [name, setName] = React.useState('');
  const [renameFileModal, toggleRenameModal] = React.useState(false);
  const [fileToRename, setFileToRename] = React.useState(null);
  async function getData(id) {
    const { error, data } = await getSection(id);
    if (!error) {
      setSection(data.data.data);
      setName(data.data.data.name);
    }
  }
  React.useEffect(() => {
    getData(match.params.id);
  }, [match.params.id]);

  const doRenameFile = React.useCallback(
    async name => {
      const { error } = await renameFile(fileToRename.id, { name });
      if (!error) {
        getData(match.params.id);
      } else {
        Alert.error(error.message);
      }
    },
    [fileToRename],
  );

  const onFileDrop = React.useCallback(async files => {
    try {
      await Promise.all(
        files.map(file => {
          const payload = new FormData();
          payload.append('folder_id', match.params.id);
          payload.append('file', file);
          return uploadFile(payload);
        }),
      );
    } catch (e) {
      Alert.error(e);
    }
    getData(match.params.id);
  }, []);

  const saveChanges = async () => {
    if (name !== section.name) {
      const { error, data } = await updateSection(section.id, { name });
      if (!error) {
        setSection(data.data.data);
      }
    }
  };

  const getTdProps = React.useCallback((state, row, column, instance) => {
    return {
      onClick: async (e, handleOriginal) => {
        if (column.Header === 'Rename') {
          setFileToRename(row.original);
          toggleRenameModal(true);
        }
        if (column.Header === 'Delete') {
          const { error } = await deleteFile(row.original.id);
          if (!error) {
            getData(match.params.id);
          } else {
            Alert.error(error.response.data.message);
          }
        }
        if (handleOriginal) {
          handleOriginal();
        }
      },
    };
  });

  return section.name ? (
    <div className="max-w-content mx-auto py-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-pink mb-1">Manage Folder</h3>
          <input
            onChange={event => setName(event.target.value)}
            style={{ fontSize: '76px', lineHeight: '.88' }}
            className="bg-transparent text-white"
            type="text"
            value={name}
          />
        </div>
        <div>
          <Link to={`${cancelUrl}`}>
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
            getTdProps={getTdProps}
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
      <RenameFile
        fileName={fileToRename ? fileToRename.name : ''}
        open={renameFileModal}
        close={() => toggleRenameModal(false)}
        onRename={doRenameFile}
      />
    </div>
  ) : null;
};

export default ManageFolder;
