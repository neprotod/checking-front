import React from 'react';
import { Button } from 'react-bootstrap';
import ModalWindow from './ModalWindow';

const ModalWindowToggle = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ModalWindow show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ModalWindowToggle;
