import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw-100px);
  height: 100vh;

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
    margin-top: 50px;
  }
`;
