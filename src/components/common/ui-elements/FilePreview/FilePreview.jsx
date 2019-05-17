import React from 'react';
import ApplicationModal from '@components/ui-elements/ApplicationModal/ApplicationModal';

const FilePreview = ({ close, file }) => {
  console.log(file);
  return (
    <ApplicationModal open={!!file} close={close} width="650px">
      {!!file ? (
        <div className="pt-6 px-8">
          <div>
            <h3 className="font-arial mb-4 text-white text-center text-2xl uppercase">
              {file.name}
            </h3>
            <div
              className="bg-center bg-cover mb-2"
              style={{
                backgroundImage: `url(${file.url})`,
                height: '350px',
              }}
            />
          </div>
          <div className="flex justify-between mb-4">
            <div>Size: {file.size} (B)</div>
            <div className="uppercase">.{file.ext}</div>
          </div>
          <div className="flex justify-end">
            <button
              style={{ width: '150px' }}
              onClick={close}
              className="py-2 rounded border border-white text-white mr-4">
              Close
            </button>
            <button
              style={{ width: '150px' }}
              onClick={close}
              className="py-2 rounded bg-tirques">
              <i className="fa fa-download mr-4" />
              Download
            </button>
          </div>
        </div>
      ) : null}
    </ApplicationModal>
  );
};

export default FilePreview;
