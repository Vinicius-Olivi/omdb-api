import { useEffect, useState } from "react";
import "./App.css";
import "./global.css";
// import Home from "./pages/Home/Home";
import { APIKey } from "./config/key";
import { Container, Movie, MovieList } from "./style";

const App = () => {
  const [movies, setMovies] = useState();
  const image_path = "https://image.tmdb.org/t/p/w500";

  const [errorData, setErrorData] = useState(null);

  const fetchHandler = async () => {
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

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies?.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href="#">
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
};

export default App;
