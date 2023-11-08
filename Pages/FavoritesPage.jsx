import { useOutletContext } from "react-router-dom";
import CharCard from "../components/CharCard";
// import Button from "react-bootstrap/esm/Button";

const FavoritesPage = () => {
  const {setFavorites, favorites} = useOutletContext()
  
  return (
    <>
      <h2 className = 'text-red'>Favorites</h2>
      {favorites.map((char, id)=>(
        <CharCard 
        id={char.id} 
        name={char.name} 
        image={char.image} 
        setFavorites={setFavorites} 
        favorites={favorites}
        key = {id}
        />
      ))}
     
    </>
  );
};

export default FavoritesPage