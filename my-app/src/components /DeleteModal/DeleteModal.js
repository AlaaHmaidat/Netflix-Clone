import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './DeleteModal.css';

function DeleteModal(props) {

  const [newArr, setNewArr] = useState([]);

  const deleteMovie = async (e) => {
    e.preventDefault();
    try {
      const serverURl = `https://movies-library-production-1635.up.railway.app/favorite/${props.clickedDeleteCard.id}`;
      const axiosRes = await axios.delete(serverURl);
      
    }
    catch (err) {

    }
  }

  return (
    <Modal show={props.showDeleteFlag}>
      <Modal.Header closeButton>

        <Modal.Title>{props.clickedDeleteCard.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <h5>Are you sure you would like to delete the movie from your favorites!</h5>

        <Form onSubmit={deleteMovie}>
          <Button variant="secondary" className='btd' type="submit" onClick={props.handlecloseDelete} >
            DELETE
          </Button>
        </Form>

      </Modal.Body>
    </Modal>
  );
}

export default DeleteModal;