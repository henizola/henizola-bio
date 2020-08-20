import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw-100px);
  height: 100vh;
  displa: flex;
  flex-direction: column;

  padding-top: 50px;
  .profile {
    border-radius: 400px 400px;
    margin: auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: 2px solid gray;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;
export const Name = styled.div`
  text-align: center;
  .header {
    font-weight: bold;
    color: #cacaca;
    font-size: 2.8em;
    line-height: 1.7em;
    font-weight: 700;
  }
  #logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  #logo path:nth-child(2) {
    stroke-dasharray: 390px;
    stroke-dashoffset: 390px;

    animation: lineanim 2s ease forwards 0.2s;
  }
  #logo path:nth-child(3) {
    stroke-dasharray: 260px;
    stroke-dashoffset: 260px;

    animation: lineanim 2s ease forwards 0.4s;
  }
  #logo path:nth-child(4) {
    stroke-dasharray: 281px;

    animation: lineanim 2s ease forwards 0.6s;
    stroke-dashoffset: 281px;
  }
  #logo path:nth-child(5) {
    stroke-dasharray: 170px;
    animation: lineanim 2s ease forwards 0.9s;

    stroke-dashoffset: 170px;
  }
  #logo path:nth-child(6) {
    stroke-dasharray: 315px;

    animation: lineanim 2s ease forwards 1.1s;
    stroke-dashoffset: 315px;
  }
  #logo path:nth-child(7) {
    stroke-dasharray: 297px;
    animation: lineanim 2s ease forwards 1.3s;

    stroke-dashoffset: 297px;
  }
  #logo path:nth-child(8) {
    stroke-dasharray: 260px;

    animation: lineanim 2s ease forwards 1.5s;
    stroke-dashoffset: 260px;
  }
  #logo path:nth-child(9) {
    stroke-dasharray: 159px;

    animation: lineanim 2s ease forwards 1.7s;
    stroke-dashoffset: 159px;
  }
  #logo path:nth-child(10) {
    stroke-dasharray: 220px;

    animation: lineanim 2s ease forwards 2s;
    stroke-dashoffset: 220px;
  }
  #logo path:nth-child(11) {
    stroke-dasharray: 159px;

    animation: lineanim 2s ease forwards 2.2s;
    stroke-dashoffset: 159px;
  }
  #logo path:nth-child(12) {
    stroke-dasharray: 260px;
    stroke-dashoffset: 260px;
    animation: lineanim 2s ease forwards 2.4s;
  }
  #logo path:nth-child(13) {
    stroke-dasharray: 445px;
    stroke-dashoffset: 445px;

    animation: lineanim 2s ease forwards 2.6s;
  }

  @keyframes lineanim {
    to {
      stroke-dashoffset: 0;
    }
  }
  .bottom {
    font-size: 52px;
    margin-top: 15%;
    animation: bottom 8s ease-in;
  }
  @keyframes bottom {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
  }
`;
