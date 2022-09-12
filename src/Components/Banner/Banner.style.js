import styled from "styled-components";
import girl from "../../Assets/Images/girl.webp";

export const Div = styled.div`
  display: flex;

  .banner {
    width: 100%;

    height: 90vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${girl});
    object-fit: cover;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0 0 60% 0;
    z-index: 1;
  }

  .overlay {
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    height: 94vh;
    background-color: #70cca0;
    opacity: 0.6;

    border-radius: 0 0 60% 0%;
  }
  .overlay1 {
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    height: 94vh;
    background-color: black;
    opacity: 0.5;
    z-index: 2;
    border-radius: 0 0 60% 0%;
  }
  .text {
    width: 100%;
    height: 33rem;
    background-color: transparent;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  h2 {
    background-color: transparent;
    font-size: 3rem;
  }
  p {
    background-color: transparent;
    font-size: 1rem;
    margin-top: 1rem;
    color: #ececec;
  }
  .btn {
    margin-top: 1rem;
  }
`;
