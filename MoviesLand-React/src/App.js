import React, { useEffect, useState } from "react";
import "./index.css";
import Moviecard from "./MovieCard";

// 2b90d09e

const Url = "http://www.omdbapi.com/?apikey=2b90d09e";
// const movies1 = {
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//   Title: "Batman v Superman: Dawn of Justice",
//   Type: "movie",
//   Year: "2016",
//   imdbID: "tt2975590",
// };

function App() {
  const [movies, setmovies] = useState([]);
  const [ searchterm, setsearchterm] = useState("")

  const searchmovies = async function (tittles) {
    const response = await fetch(`${Url}&s=${tittles}`);
    const data = await response.json();
    console.log(data);
    setmovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchmovies("superman")
  }, []);

  return (
    <div className="App">
      <h1>MoviesApp</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchterm}
          onChange={(e) => { setsearchterm(e.target.value)}}
        />

        <img src="https://image.shutterstock.com/image-vector/search-icon-sign-design-260nw-730234714.jpg" alt="search" onClick={() => { searchmovies(searchterm)}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie1) => (
            
            <Moviecard movie={movie1} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
