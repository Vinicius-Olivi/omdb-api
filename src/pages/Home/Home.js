import React from "react";

import godfather from "../../assets/images/godfather.jpg";
import Container from "./style";

const Home = () => {
  return (
    <Container>
      <h1>Movies</h1>
      <ul>
        <li>
          <img src={godfather} alt="" />
          <span>GodFather</span>
        </li>
        <li>
          <img src={godfather} alt="" />
          <span>GodFather</span>
        </li>
        <li>
          <img src={godfather} alt="" />
          <span>GodFather</span>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
