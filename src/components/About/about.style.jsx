import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw-100px);
  height: 100vh;
  displa: flex;
  flex-direction: column;
  .header {
    font-family: "Quicksand", sans-serif;
    font-size: 4em;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 20px #fe3a80;
    margin-left: 70%;
    animation: header 1s ease-in;
  }
  @keyframes header {
    0% {
      margin-top: -150px;
    }
  }
`;
