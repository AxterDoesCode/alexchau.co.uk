import Nav from "./SubComponents/Nav"
import LogoName from "./SubComponents/LogoName"
import styled from "styled-components/macro"

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:"blank nav name";
  padding: 2em;
  align-items: center;
  height: 10%;
`
export default function Header(){
  return(
    <StyledHeader>
      <Nav />
      <LogoName text="alex.chau"/>
    </StyledHeader>
  )
}