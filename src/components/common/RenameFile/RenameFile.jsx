import React from 'react';
import ApplicationModal from '@components/ui-elements/ApplicationModal/ApplicationModal';

const RenameFile = ({ fileName, open, close, onRename }) => {
  const [name, setName] = React.useState('');
  const rename = React.useCallback(event => {
    event.preventDefault();
    onRename(name);
    close();
  });
  React.useEffect(() => {
    if (open) {
      setNameFromProp();
    } else {
      setName('');
    }
  }, [open]);
  const setNameFromProp = () => {
    setName(fileName);
  };
  return (
    <ApplicationModal open={open} close={close}>
      <div className="pt-6">
        <h2 className="truncate mb-4">Rename file</h2>
        <form onSubmit={rename}>
          <div className="mb-4">
            <input
              className="bg-transparent border-b border-white w-full text-white px-2 py-2"
              value={name}
              onChange={event => setName(event.target.value)}
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

export default RenameFile;
