import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './ModalFavMovie.css';

function ModalFavMovie(props) {

  return (
    <Modal show={props.showFlag} onHide={props.handleclose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.clickedCard.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={`https://image.tmdb.org/t/p/w500${props.clickedCard.poster_path}`} width='100%'></Image>
        {props.clickedCard.overview}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleclose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalFavMovie;