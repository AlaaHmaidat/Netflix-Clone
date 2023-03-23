import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from './components/FavList/FavList';
import Navbar from './components/Navbar/Navbar';
import './App.css'
function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<FavList />}></Route>
      </Routes>
    </main>
  );
}

export default App;
