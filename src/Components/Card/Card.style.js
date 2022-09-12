import styled from "styled-components";

import girl from "../../Assets/Images/girl.webp";

export const Div = styled.div`
  width: 70%;
  margin: 12rem auto 5rem;
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;

  .card {
    position: absolute;
    top: 10%;
    left: 0;
    height: 370px;
    width: 400px;
    background-color: #063300;
    border-radius: 5%;
  }
  .card2 {
    position: absolute;
    top: 5%;
    left: 0;
    height: 370px;
    width: 380px;
    background-color: #0d5f02;
    border-radius: 5%;
  }
  .card3 {
    position: absolute;
    top: 0;
    left: 0;
    height: 360px;
    width: 350px;
    background-size: cover;
    background-image: url(${girl});
    object-fit: cover;
    border-radius: 5%;
  }
  .text {
    margin-top: 2rem;
    .line {
      height: 5px;
      width: 120px;
      margin-bottom: 1rem;

      border-radius: 5px;
      background-color: #09785e;
    }
    h2 {
      margin-bottom: 0.8rem;
    }
    p {
      color: #bababa;
      margin-bottom: 1rem;
    }
  }
`;
