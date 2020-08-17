import React from "react";

import { GlobalStyles } from "./global.styles";

import Particles from "react-particles-js";
import { particlesOption } from "./particles.utils";

import Nav from "./components/navigator/navigator.component";
import Home from "./components/home/home.component";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Particles className="Particles" params={particlesOption} />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
