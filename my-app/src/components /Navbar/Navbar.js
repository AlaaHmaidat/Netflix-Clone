import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h4 className="appName">
          Netflix Clone
        </h4>
        <Link to="/" className="link">Home</Link>
        <Link to="/addmovie" className="link">Movies</Link>
      </nav>
    </>
  )
}

export default Navbar;
