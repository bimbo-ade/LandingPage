import styled from "styled-components";
export const Div = styled.div`
  background-color: #031a00;
  height: 50vh;
  margin: 10rem auto 0;
  display: grid;
  grid-template-columns: 40% 40%;
  align-items: center;
  justify-content: center;

  .text {
    text-align: center;
    h4 {
      padding-bottom: 1.2rem;
    }
  }
  .contact {
    .icons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      span {
        text-align: center;
        margin-left: 1rem;
        margin-bottom: 1.3rem;
      }
    }
    svg {
      font-size: 1.5rem;
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
    background-color: rgb(19, 19, 19, 0.3);
    border-radius: 0.4rem;
    h3 {
      margin-bottom: 1rem;

      background-color: transparent;
    }
  }
`;
