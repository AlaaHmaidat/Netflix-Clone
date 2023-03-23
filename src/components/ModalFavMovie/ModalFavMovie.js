import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import './ModalFavMovie.css';

function ModalFavMovie(props) {

  const [comment, setComment] = useState('');
  const handleComment = (e) => {
    setComment(e.target.value);
  }

  const updateMovie = async (e) => {
    e.preventDefault();

    try {
      const obj = {
        comment: comment //(if i use useState and handleComment methodes) and i shoud use onChange={handleComment} in (Form.Control)
        // comment: e.target.comment.value
      }

      const serverURl = `${process.env.REACT_APP_serverURL}/favorite/${props.clickedCard.id}`;
      const axiosRes = await axios.put(serverURl, obj);
      console.log(axiosRes);
      //close the update modal
      props.handleclose();

    }
    catch (err) {

    }
  }


  return (
    <Modal show={props.showFlag} onHide={props.handleclose}>
      <Modal.Header closeButton>

        <Modal.Title>{props.clickedCard.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Image src={`https://image.tmdb.org/t/p/w500${props.clickedCard.poster_path}`} width='100%'></Image>
        {props.clickedCard.overview}
        <h6>comment</h6>
        <Form onSubmit={updateMovie}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control name="comment" type="text" onChange={handleComment} defaultValue={props.clickedCard.comment} />
          </Form.Group>
          <Button variant="secondary" className='bt' type="submit" >
            Update
          </Button>

        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalFavMovie;