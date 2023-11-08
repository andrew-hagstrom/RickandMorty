import { Link } from "react-router-dom";

const Header = ({favorites}) => {
  return (
    
    <>
    <div>
      <h1 className='text-red'>Rick and Morty</h1>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="about/">About</Link>
        <br></br>
        <Link to="characters/">All Characters</Link>
        <br></br>
        <Link to="favorites/">Favorites {favorites.length}</Link>
      </nav>
    </div>
    </>
  );
};

export default Header;