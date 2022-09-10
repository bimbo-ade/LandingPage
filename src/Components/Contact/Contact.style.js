import styled from "styled-components";
export const Div = styled.div`
  background-color: #032b21;
  height: 50vh;
  margin: 10rem auto 0;
  display: grid;
  grid-template-columns: 40% 40%;
  align-items: center;
  justify-content: center;

  .text {
    text-align: center;
    background-color: transparent;
    h2 {
      background-color: transparent;

      padding-bottom: 1.2rem;
    }
  }
  .contact {
    background-color: transparent;
    .ico {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      span {
        background-color: transparent;
        text-align: center;
        margin-left: 1rem;
        font-size: 1rem;
      }
    }
    svg {
      background-color: transparent;
      font-size: 2rem;
      padding-bottom: 1.2rem;
    }
  }

  .cont {
    background-color: transparent;
    text-align: center;
    height: auto;
    width: auto;
    h3 {
      margin-bottom: 1rem;

      background-color: transparent;
    }
  }
`;
