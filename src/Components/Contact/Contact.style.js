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
    h2 {
      padding-bottom: 1.2rem;
    }
  }
  .contact {
    .ico {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      span {
        text-align: center;
        margin-left: 1rem;
        font-size: 1rem;
      }
    }
    svg {
      font-size: 2rem;
      padding-bottom: 1.2rem;
    }
  }

  .cont {
    text-align: center;
    height: 17rem;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(19, 19, 19, 0.5);
    border-radius: 0.4rem;
    h3 {
      margin-bottom: 1rem;

      background-color: transparent;
    }
  }
`;
