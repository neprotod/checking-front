import React from 'react';
import Modal from 'react-modal';
import ModalText from './ModalText';
import styles from './Modal.css';

Modal.setAppElement('body');

const ModalWindow = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button type="button" onClick={openModal}>
        Terms and Conditions
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles.modal}
        contentLabel="Example Modal"
      >
        <button type="button" style={styles.xButton} onClick={closeModal}>
          X
        </button>
        <div>
          <ModalText />
        </div>
        <button type="button" style={styles.closeButton} onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default ModalWindow;
