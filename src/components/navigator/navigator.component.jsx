import React from "react";

import { Container } from "./navigator.styles";

import { BsHouseFill, BsBag } from "react-icons/bs";
import { FiUser, FiMail } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";

const Nav = () => {
  return (
    <Container>
      <div className="home">
        <BsHouseFill className="icon home" />
      </div>
      <div className="about">
        <FiUser className="icon " />
      </div>
      <div className="works">
        <FaLaptopCode className="icon " />
      </div>
      <div className="contact">
        <FiMail className="icon contact" />
      </div>
    </Container>
  );
};

export default Nav;
