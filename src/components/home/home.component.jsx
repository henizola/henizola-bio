import React from "react";

import { Container } from "./home.styles";

import profile from "../../assets/profile01.jpg";

const Home = () => {
  return (
    <Container>
      <img src={profile} className="profile" />
    </Container>
  );
};
export default Home;
