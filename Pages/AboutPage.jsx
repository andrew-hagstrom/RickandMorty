import { useEffect, useState } from "react";
import axios from "axios";


const AboutPage = () => {

  const [episode, setEpisodes] = useState([]);

  const getEpisodes = async () => {
    let response = await axios.get("https://rickandmortyapi.com/api/episode");
    // console.log(response.data.results);
    setEpisodes(response.data.results);
  };

  useEffect(() => {
    getEpisodes();
  }, []);
  
  const EpisodeInfo = (epi) => {
    let info = ""
    Object.keys(epi).map((key)=>(
        (key==="name" || key === "air_date" || key === "episode")?info += key + ": " + epi[key] + " ": info
    ))
    return info
  }

    return (
        <>
        <h2 class='text-gold'>About the Show</h2>
        <h3 className='text-green'>Summary</h3>
        <h3 className='text-green'>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and a misanthropic grandfather dragging his grandson into hijinks.</h3>
       <h3 className = 'text-red'>List of Shows</h3>
       <ol className = 'text-red'>
            {episode.map((epi, idx) => (
                <li key = {idx}>
                   {EpisodeInfo(epi)} 
                </li>
        ))}
        </ol> 
        </>
        );
    }

export default AboutPage;