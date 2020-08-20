import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 100vh;
  background: transparent;
  box-shadow: 4px 4px 8px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  box-shadow: rgb(10, 10, 11) 0px 2px 7px, rgb(0, 0, 0) -3px -3px 0px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgba(3, 3, 3, 0.5);
  padding: 12px;
  .icon {
    color: gray;
    font-size: 60px;
    cursor: pointer;
  }
  div {
    position: relative;
    margin-bottom: 24px;
    min-height: 66px;
    cursor: pointer;
    display: flex;
    height: 100px;
    paddin-top: 0;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100px;
  }
  .home:hover::after {
    content: "Home";
    color: rgb(238, 238, 238);
    font-family: AvenirLTPro-Medium;
    opacity: 1;
    font-size: 16px;
    padding-top: 12px;
    letter-spacing: 1px;
    transition: all 0.3s ease 0s;
  }
  .about:hover::after {
    content: "About";
    color: rgb(238, 238, 238);
    font-family: AvenirLTPro-Medium;
    opacity: 1;
    font-size: 14px;
    padding-top: 12px;
    letter-spacing: 1px;
    transition: all 0.3s ease 0s;
  }
  .works:hover::after {
    content: "Works";
    color: rgb(238, 238, 238);
    font-family: AvenirLTPro-Medium;
    opacity: 1;
    font-size: 14px;
    padding-top: 12px;
    letter-spacing: 1px;
    transition: all 0.3s ease 0s;
  }
  .contact:hover::after {
    content: "Contact";
    color: rgb(238, 238, 238);
    font-family: AvenirLTPro-Medium;
    opacity: 1;
    font-size: 14px;
    padding-top: 12px;
    letter-spacing: 1px;
    transition: all 0.3s ease 0s;
  }
`;
