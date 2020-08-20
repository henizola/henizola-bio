import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Baloo Tamma 2', cursive, sans-serif;
	padding:0px opx;
	height:100vh;
  background: linear-gradient(89deg,#2a2a2a 0%,#414141 100% );
  
	.Particles 
{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

}

a {
	text-decoration: none;
	color: black;
}

* {
	box-sizing: border-box;
}
.App{
  max-height:100vh;
  display:grid;
  grid-template-columns:100px 1fr;
}
`;
