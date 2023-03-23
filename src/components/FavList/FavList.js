import { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList'
import './FavList.css';

function FavList() {

  const [favMovieArr, setFavMovieArr] = useState([]);//to access data inside (return)
  const FavListComponentesReq = async () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/favorite`;
    const resData = await fetch(serverURL);
    const data = await resData.json();
    console.log(data);
    setFavMovieArr(data);
  }
  useEffect(() => {
    FavListComponentesReq();
  }, [favMovieArr])

  return (
      <MovieList favData={favMovieArr} />
  );
}

export default FavList;