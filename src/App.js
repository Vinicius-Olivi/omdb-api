import { useEffect, useState } from "react";
import "./App.css";
import "./global.css";
import Home from "./pages/Home/Home";

const App = () => {
  const [nasa, setNasa] = useState([]);
  const [errorData, setErrorData] = useState(null);

  const fetchHandler = async () => {
    try {
      let response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=" +
          process.env.REACT_APP_API_KEY,
      );
      console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      let data = await response.json();
      setNasa(data);
    } catch (error) {
      setErrorData("Could not fetch data");
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);
  return (
    <div className="App">
      {/*       {errorData && <p>{errorData}</p>}
      {nasa && nasa.url && (
        <div>
          <h1>{nasa.title}</h1>
          <img src={nasa.url} alt={nasa.title} />
          <p>{nasa.explanation}</p>
        </div>
      )} */}
      <Home />
    </div>
  );
};

export default App;
