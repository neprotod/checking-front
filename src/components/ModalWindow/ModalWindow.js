import React from 'react';
import Modal from 'react-modal';
import ModalText from './ModalText';
import styles from './Modal.module.css';

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
      <button type="button" className={styles.btnAgree} onClick={openModal}>
        Agreed with Privacy Policy
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Example Modal"
      >
        <div>
          <ModalText />
        </div>
        <button
          type="button"
          className={styles.closeButton}
          onClick={closeModal}
        >
          &#10006;
        </button>
      </Modal>
    </div>
  );
};

export default ModalWindow;
