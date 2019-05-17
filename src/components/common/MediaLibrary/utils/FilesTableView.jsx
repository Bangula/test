import React from 'react';
import ReactTable from 'react-table';
import { getFileDownloadUrl } from '@endpoints/media-library';

const columns = [
  {
    headerClassName: 'opacity-0',
    width: 78,
    id: 'image-col',
    Header: 'Image',
    accessor: 'url',
    Cell: props => {
      return (
        <div className="bg-contain bg-no-repeat w-16">
          <img
            className="w-full"
            src={`${props.original.url}`}
            alt="File preview"
          />
        </div>
      );
    },
  },
  {
    headerClassName: 'text-left',
    id: 'name-col',
    Header: 'Name',
    accessor: 'name',
  },
  {
    headerClassName: 'text-left',
    id: 'size-col',
    Header: 'Size',
    accessor: 'size',
  },
  {
    headerClassName: 'text-left',
    id: 'format-col',
    Header: 'Format',
    accessor: 'ext',
  },
  {
    headerClassName: 'text-left',
    id: 'updated-col',
    Header: 'Updated',
    accessor: 'updated_at.date',
    Cell: ({ value }) => {
      const dateComponents = value.split(' ');
      const timeComponents = dateComponents[1];
      const date = `${dateComponents[0]} ${timeComponents.split('.')[0]}`;
      return <span>{date}</span>;
    },
  },
  {
    headerClassName: 'opacity-0',
    width: 48,
    id: 'action-col',
    Header: 'Download',
    accessor: 'url',
    Cell: () => <i className="fa fa-download text-tirques" />,
  },
];

const FilesTableView = ({ files, deployFilePreview }) => {
  const doGetDownloadUrl = React.useCallback(async id => {
    const { error, data } = await getFileDownloadUrl(id);
    if (!error) {
      window.open(data.data.url, '_blank');
    }
  });
  const getTdProps = React.useCallback((state, row, column, instance) => {
    return {
      onClick: async (e, handleOriginal) => {
        if (column.Header === 'Download') {
          doGetDownloadUrl(row.original.id);
        }
        if (column.Header === 'Image') {
          deployFilePreview(row.original);
        }
        if (handleOriginal) {
          handleOriginal();
        }
      },
    };
  });
  return files ? (
    <ReactTable
      getTdProps={getTdProps}
      className="custom-ReactTable"
      data={files}
      columns={columns}
      pageSize={Math.min(files.length, 10)}
    />
  ) : null;
};

export default FilesTableView;
