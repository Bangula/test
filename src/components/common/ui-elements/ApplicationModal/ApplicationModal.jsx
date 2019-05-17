import React from 'react';
import Modal from 'react-responsive-modal';

const ApplicationModal = ({ open, close, children, width = '400px' }) => {
  const modalClassNames = {
    modal: 'bg-black',
  };
  const modalStyles = {
    modal: {
      width,
    },
  };
  return (
    <Modal
      classNames={modalClassNames}
      styles={modalStyles}
      open={open}
      onClose={close}
      center>
      {children}
    </Modal>
  );
};

export default ApplicationModal;
