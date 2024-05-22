import { useEffect, useState } from "react";
import "./App.css";
import "./global.css";
import Home from "./pages/Home/Home";
import { APIKey } from "./config/key";

const App = () => {
  /*   const [movies, setMovies] = useState([]);
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
  }, []); */
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
