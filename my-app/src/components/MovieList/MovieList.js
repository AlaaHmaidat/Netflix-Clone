import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalFavMovie from '../ModalFavMovie/ModalFavMovie';
import DeleteModal from '../DeleteModal/DeleteModal';
import './MovieList.css';

function MovieList(props) {

  const [showFlag, setShowFlag] = useState(false);
  const [clickedCard, setClickedCard] = useState({});

  const handleShow = (item) => {
    console.log(item);
    setClickedCard(item);
    setShowFlag(true);
  }

  const handleclose = () => {
    setShowFlag(false);
  }
//....
  const [showDeleteFlag, setShowDeleteFlag] = useState(false);
  const [clickedDeleteCard, setClickedDeleteCard] = useState({});

  const handleShowDelete = (item) => {
    console.log(item);
    setClickedDeleteCard(item);
    setShowDeleteFlag(true);
  }

  const handlecloseDelete = () => {
    setShowDeleteFlag(false);
  }
  //....
 


  return (
      <main className="main">

        {props.favData.map((card) => {

          return <div className='mainDiv'>
            <Card style={{ width: '18rem' }} className="cards">
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {`${card.overview.substring(0, 50)}...`}
                  <h6>comment</h6>
                  <p>{card.comment}</p>
                </Card.Text>
                <Button variant="primary" onClick={() => { handleShow(card) }} className='bt'>
                  Update
                </Button>
                {' '}
                <Button variant="primary" className='btDe' onClick={() => { handleShowDelete(card) }} >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        })}

        <ModalFavMovie showFlag={showFlag} handleclose={handleclose} clickedCard={clickedCard} ></ModalFavMovie>
        <DeleteModal showDeleteFlag={showDeleteFlag} handlecloseDelete={handlecloseDelete} clickedDeleteCard={clickedDeleteCard}  ></DeleteModal>

      </main>


  );
}

export default MovieList;