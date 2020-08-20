import React from "react";

import { Container } from "./navigator.styles";

import { BsHouseFill, BsBag } from "react-icons/bs";
import { FiUser, FiMail } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";

import { useHistory } from "react-router-dom";

const Nav = () => {
  let history = useHistory();
  return (
    <Container>
      <div className="home" onClick={() => history.push("/")}>
        <BsHouseFill className="icon home" />
      </div>
      <div className="about" onClick={() => history.push("/about")}>
        <FiUser className="icon " />
      </div>
      <div className="works" onClick={() => history.push("/works")}>
        <FaLaptopCode className="icon " />
      </div>
      <div className="contact" onClick={() => history.push("/contact")}>
        <FiMail className="icon contact" />
      </div>
    </Container>
  );
};

export default Nav;
