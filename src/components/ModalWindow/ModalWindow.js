import React from 'react';
import Modal from 'react-modal';
import styles from './Modal.css';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
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
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Example Modal"
      >
        <button type="button" onClick={closeModal}>
          close
        </button>
        <h2>Terms and Conditions</h2>
        <div>I am a modal</div>
        <button type="button" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default ModalWindow;
