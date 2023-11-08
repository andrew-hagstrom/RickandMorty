import { useEffect, useState } from "react";
import axios from "axios";
import CharCard from "../components/CharCard";
import { useOutletContext } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function AllCharactersPage() {
  const [characters, setCharacters] = useState([]);
  const { setFavorites,favorites } = useOutletContext();



  const getAllCharacters = async (page) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      const newCharacters = response.data.results;
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    let currentPage = 1;

    const fetchAllCharacters = async () => {
      try {
        let response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
        const newCharacters = response.data.results;
        setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);

        if (response.data.info.next) {
          currentPage++;
          fetchAllCharacters();
        }
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchAllCharacters();
  }, []);

  // const getAllCharacters = async () => {
  //   let response = await axios.get("https://rickandmortyapi.com/api/character");
  //   console.log(response.data.results);
  //   setCharacters(response.data.results);
  // };

  // useEffect(() => {
  //   getAllCharacters();
  // }, []);

  
  return (
    <>
      <h2 className = 'text-red'>All Characters</h2>
      <div className='all-cards'>
      {characters.map((char, idx) => (
        <CharCard
          key={idx}
          id={char.id}
          name={char.name}
          image={char.image}
          setFavorites={setFavorites}
          favorites={favorites}
        />
      ))}</div>
    </>
  );
};

export default AllCharactersPage;
  
  
  
  
//   return (
//     <>
//       <h2 class = 'text-gold'>Characters</h2>
//       {characters.map((character, idx) => {
//         console.log(character)
//         // name image species status
//           return (
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={character.image} />
//             <Card.Body>
//             <Card.Title>{character.name}</Card.Title>
//               <Card.Text>
//                 <ul>
//                     <li>
//                         Species: {character.species}
//                     </li>
//                     <li>
//                         Status: {character.status}
//                     </li>
//                 </ul>
//               </Card.Text>
//               {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//           </Card>
//         );

// })}
//     </>
//   );
// }
// export default AllCharactersPage;