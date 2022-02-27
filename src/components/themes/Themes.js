import styled from "styled-components";

const StyledApp = styled.div`
background-color: #f1dabf;
`
const StyledNav = styled.nav`
  background-color:#f4c95d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1{
    font-size:2.5rem
  }
  div{
    display:flex;
    flex-flow: column wrap;
    font-size: 20px;
  }
`
const StyledHome = styled.div`
    background-color: #f1dabf;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    margin: 1rem;
    padding: 5px;
    img{
      width: 100%;
      margin: 1rem 0;
    }
` 

const StyledOrderForm = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    button{
      margin: 1rem 0;
    }
`
const StyledOrder = styled.div`
    background-color:#edfdfb;
    padding: 0 5rem;
`
 
export { StyledApp, StyledNav, StyledHome, StyledOrderForm, StyledOrder }