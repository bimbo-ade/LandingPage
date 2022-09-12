import styled from "styled-components";

// export const Line = styled.div`
//   margin: 5rem auto 0;
//   height: 2px;
//   width: 80%;
//   background-color: #eeeeee;
// `;

export const Div = styled.div`
  background-color: #032b21;
  height: 250px;

  width: 100%;
  margin: 0 auto 0;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: center;

  .img-cont {
    padding-left: 5rem;
    background-color: transparent;
    img {
      background-color: transparent;
      margin-bottom: 1rem;
    }
    p {
      background-color: transparent;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  .contact {
    padding-left: 5rem;
    background-color: transparent;
    svg {
      background-color: transparent;
      font-size: 2rem;
      padding-right: 1.2rem;
    }
    p {
      background-color: transparent;
      font-size: 0.9rem;
      margin-top: 0.4rem;
    }
  }
`;
