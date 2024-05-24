import React from "react";
import MovieComponent from "./MovieComponent";

const HomePage = () => {
  const imageBasePath = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <MovieComponent imageBasePath={imageBasePath} />
    </div>
  );
};

export default HomePage;
