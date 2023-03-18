import { Route, Routes } from 'react-router-dom';
import Home from "./components /Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from './components /FavList /FavList';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addmovie" element={<FavList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
