import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
//import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../ModalMovie/ModalMovie';
import './Home.css';

function Home() {

  // const [show, setShow] = useState(false);//to open the modalMovie

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [movieArr, setMovieArr] = useState([]);//to access data inside (return)
  const HomeComponentesReq = async () => {
    const serverURL = `https://movies-library-production-1635.up.railway.app/trending`;
    const resData = await fetch(serverURL);
    const data = await resData.json();
    setMovieArr(data);
  }
  useEffect(() => {
    HomeComponentesReq();
  }, [])
  //.............
  const [showFlag, setShowFlag] = useState(false);
  const [clickedCard, setClickedCard] = useState({});

  const handleShow = (item) => {
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

        {movieArr.map((card) => {

          return <div className='mainDiv'>
            <Card style={{ width: '18rem' }} className="cards">
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {`${card.overview.substring(0, 50)}...`}

                </Card.Text>
                <Button variant="primary" className="bt" onClick={() => { handleShow(card) }} >
                  Add to the favorite
                </Button>

              </Card.Body>
            </Card>

          </div>
        })}
        <ModalMovie showFlag={showFlag} handleclose={handleclose} clickedCard={clickedCard}></ModalMovie>

      </main>
      <footer></footer>

    </div>
  );
}

export default Home;