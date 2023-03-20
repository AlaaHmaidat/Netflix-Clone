import { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList'
import './FavList.css';

function FavList() {

  const [favMovieArr, setFavMovieArr] = useState([]);//to access data inside (return)
  const FavListComponentesReq = async () => {
    const serverURL = `https://movies-library-production-1635.up.railway.app/favorite`;
    const resData = await fetch(serverURL);
    const data = await resData.json();
    console.log(data);
    setFavMovieArr(data);
  }
  //const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    FavListComponentesReq();
  }, [favMovieArr])

  return (
    <>
      <MovieList favData={favMovieArr} />
    </>
  );
}

export default FavList;