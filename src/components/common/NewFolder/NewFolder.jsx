import React from 'react';
import ApplicationModal from '@components/ui-elements/ApplicationModal/ApplicationModal';

const NewFolder = ({ opened, close, onAddFolder, type }) => {
  const [name, setName] = React.useState('');
  const addFolder = event => {
    event.preventDefault();
    onAddFolder(name);
    close();
  };
  return (
    <ApplicationModal open={opened} close={close}>
      <div className="pt-6">
        <h3 className="font-arial mb-4 text-white text-center text-3xl uppercase">
          New {type ? type : 'section'}
        </h3>
        <form onSubmit={event => addFolder(event)}>
          <div className="mb-4">
            <input
              onChange={event => setName(event.target.value)}
              placeholder="Enter name"
              className="bg-transparent border-b border-white w-full text-white px-2 py-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="border border-pink text-white w-32 py-2 rounded"
              type="button"
              onClick={close}>
              Cancel
            </button>
            <button className="ml-4 bg-pink text-white w-32 py-2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </ApplicationModal>
  );
};

export default NewFolder;
