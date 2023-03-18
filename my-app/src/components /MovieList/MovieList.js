import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalFavMovie from '../ModalFavMovie/ModalFavMovie';
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

  return (
    <div className="Home">

      <Navbar />

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
                  show
                </Button>

              </Card.Body>
            </Card>

          </div>
        })}

        <ModalFavMovie showFlag={showFlag} handleclose={handleclose} clickedCard={clickedCard}></ModalFavMovie>

      </main>

      <footer></footer>

    </div>
  );
}

export default MovieList;