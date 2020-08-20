import React from "react";

import { GlobalStyles } from "./global.styles";

import Particles from "react-particles-js";
import { particlesOption } from "./particles.utils";

import Nav from "./components/navigator/navigator.component";
import Home from "./components/home/home.component";
import About from "./components/About/about.component";
import MyWorks from "./components/my-works/my-works.component";
import Contact from "./components/contact-me/contact-me.component";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Particles className="Particles" params={particlesOption} />
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/works" component={MyWorks} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
