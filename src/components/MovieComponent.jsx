import React, { useEffect, useState } from "react";
import { Container, Movie, MovieList } from "../style";
import { APIKey } from "../config/key";

const MovieComponent = ({ imageBasePath }) => {
  const [movies, setMovies] = useState([]);
  const [errorData, setErrorData] = useState(null);

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }

  const [currentDate, setCurrentDate] = useState(getDate());

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`,
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        let data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setErrorData("Could not fetch data");
        console.log(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <h1>
        Popular movies of the day <span id="week">{currentDate}</span>
      </h1>
      <MovieList>
        {movies.map((movie) => (
          <Movie key={movie.id}>
            <a href="#">
              <img
                src={`${imageBasePath}${movie.poster_path}`}
                alt={movie.title}
              />
            </a>
            <span>{movie.title}</span>
          </Movie>
        ))}
      </MovieList>
    </Container>
  );
};

export default MovieComponent;
