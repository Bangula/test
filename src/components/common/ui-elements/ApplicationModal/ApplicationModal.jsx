import React from 'react';
import Modal from 'react-responsive-modal';

const modalClassNames = {
  modal: 'bg-black',
};
const modalStyles = {
  modal: {
    width: '400px',
  },
};

const ApplicationModal = ({ open, close, children }) => {
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
