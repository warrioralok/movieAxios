//import axios from "axios";
import { useEffect, useState } from "react";
import './Movie.module.css'
import { getMovie } from "../Services/Getservice";
export const Movie = () => {
  const [movieData, setMovieData] = useState([]);
  //const API = `https://www.omdbapi.com/?i=tt389619&apikey=150486b3&f&s=godfather`;

  const getmoviedata = async () => {
    try {
        const response = await getMovie()
      //const response = await axios.get(API);
      setMovieData(response.data.Search);
      console.log(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getmoviedata();
  }, []);

  return (
    <>
      <ul style={{listStyle:'none'}}>
        {movieData.map((elem) => {
          return <li key={elem.imdbID}><img src={elem.Poster} alt="" />{elem.Title}</li>;
        })}
      </ul>
    </>
  );
};
