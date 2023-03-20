import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './ModalMovie.css';
import React, { useState } from 'react';

function ModalMovie(props) {

  const [comment, setComment] = useState('');
  const handleComment = (e) => {
    setComment(e.target.value);
  }
  const insertMovie = async (e) => {
    try {
      e.preventDefault();
      const obj = {
        title: props.clickedCard.title,
        release_date: props.clickedCard.release_date,
        poster_path: props.clickedCard.poster_path,
        overview: props.clickedCard.overview,
        comment: comment
      }
      const serverURl = `https://movies-library-production-1635.up.railway.app/addmovie`;
      const axiosRes = await axios.post(serverURl, obj);
      console.log(axiosRes.data);

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
        <Image src={`https://image.tmdb.org/t/p/w500${props.clickedCard.poster_path}`} width='100%' />
        
        <p>{props.clickedCard.overview}</p>
        <Form onSubmit={insertMovie}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control name="comment" type="text" onChange={handleComment} placeholder="Write your comment here" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={props.handleclose}>
            Add to the favorite
          </Button>
        </Form>

      </Modal.Body>
    </Modal>
  );
}

export default ModalMovie;