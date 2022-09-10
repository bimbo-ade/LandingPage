import styled from "styled-components";
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #038d6d;
  padding: 2rem 3rem 0.5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 14;

  .links{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
  }
  ul li {
    list-style: none;
    padding: 0 0.6rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: #038d6d;
    text-decoration: 0;
  }

  }
`;
