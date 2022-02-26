import styled from "styled-components";

const StyledNav = styled.nav`
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
export { StyledNav }