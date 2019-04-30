import React from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const rootClasses = [
    'py-4',
    'px-6',
    'border',
    'border-white',
    'rounded',
    'relative',
  ];
  if (isDragActive) {
    rootClasses.push('border-dashed');
  }
  return (
    <div {...getRootProps()} className={rootClasses.join(' ')}>
      {isDragActive ? (
        <div className="bg-pink opacity-50 pin-l pin-t pin-b pin-r absolute" />
      ) : null}
      <input {...getInputProps()} />
      <div className="text-center mb-3">
        <i className="fa fa-cloud-upload-alt text-5xl" />
      </div>
      <p className="font-arial">Drag 'n' Drop or click to upload</p>
    </div>
  );
};

export default Dropzone;
