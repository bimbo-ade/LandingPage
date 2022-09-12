import styled from "styled-components";

export const Div = styled.div`
  width: 90%;
  margin: 13rem auto 5rem;
  text-align:center;
h1{
  margin-bottom:2rem;
}


  .container {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:row;
  
.cont1{
  
  position:absolute;
  top:5%;
  left:2%;
  border-radius:20% 0;
  padding:1rem;
  height:110px;
  width: 310px;
 background-color: #70CCA0;
 margin-bottom:3rem;
 z-index:-2;
}
.cont{
  display:flex;
  position:relative;
  justify-content:space-evenly;
  align-items:center;
  flex-direction:row;
 
  border-radius:20% 0;
  padding:1rem;
  height:110px;
  width: 310px;
 background-color: #064335;
 margin-bottom:3rem;



 .image{
    background-color: transparent;

    margin-left:0.5rem;
  img{
    width: 50px;
    height: 50px;
    border-radius:50%;
  }
 }
.text{
  
  margin-left:0.5rem;
  text-align:left;
  background-color: transparent;
  h3{
    background-color: transparent;
  }
  p{
    background-color: transparent;
    font-size:0.8rem;
    color:#ececec;
  }
}

  }
  
`;
