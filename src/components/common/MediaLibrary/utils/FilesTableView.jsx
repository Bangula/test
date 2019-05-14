import React from 'react';
import ReactTable from 'react-table';

const columns = [
  {
    headerClassName: 'text-left',
    width: 78,
    id: 'image-col',
    Header: '',
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
    headerClassName: 'text-left',
    width: 48,
    id: 'action-col',
    Header: '',
    accessor: 'url',
    Cell: () => <i className="fa fa-download text-tirques" />,
  },
];

const FilesTableView = ({ files }) => {
  return files ? (
    <ReactTable
      className="custom-ReactTable"
      data={files}
      columns={columns}
      pageSize={Math.min(files.length, 10)}
    />
  ) : null;
};

export default FilesTableView;
