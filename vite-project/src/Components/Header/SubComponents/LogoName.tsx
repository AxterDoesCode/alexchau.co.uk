import styled from "styled-components/macro"

const StyledLogoName = styled.p`
    color: var(--light);
    grid-area: name;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-self: end;
    font-family: 'Lobster Two', cursive;

    @media(max-width:700px){
        display: none;
    }
`

function LogoName({text}: any){
    return(
        <StyledLogoName>
            {text}
        </StyledLogoName>
    )
}

export default LogoName