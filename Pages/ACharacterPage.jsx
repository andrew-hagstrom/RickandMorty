import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from "react-router-dom";
import axios from 'axios';
// import CharCard from '../components/CharCard.jsx';

    const ACharacterPage = () => {
        const [character, setCharacter] = useState({});
        const { id } = useParams();
        const { setFavorites, favorites } = useOutletContext();
      
        const getCharacter = async () => {
          let response = await axios.get(
            `https://rickandmortyapi.com/api/character/${id}`
          );
          setCharacter(response.data);
        };
      
        useEffect(() => {
          getCharacter();
        }, []);
      
        return (
          <>
            <h2>{character.name}</h2>
            <img src={character.image} />
            <ul>
              Details
              <li>Status: {character.status}</li>
              <li>Species: {character.species}</li>
            </ul>
            {/* <button onClick={()=>setFavorites([...favorites, {"id":id, "name":character.name, "image":character.image}])}>
              Favorite
            </button> */}
          </>
        );
      };
      
      export default ACharacterPage;