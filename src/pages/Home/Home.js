import React from "react";

import godfather from "../../assets/images/godfather.jpg";
import pulp from "../../assets/images/pulp.jpg";
import scarface from "../../assets/images/scarface.jpg";
import { Container, Movie, MovieList } from "./style";

const Home = () => {
  const movies = [
    {
      title: "Godfather",
      image: godfather,
    },
    {
      title: "Pulp",
      image: pulp,
    },
    {
      title: "Scarface",
      image: scarface,
    },
  ];

  console.log(movies);
  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie>
              <a href="#">
                <img src={movie.image} alt={movie.title} />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
};

export default Home;
