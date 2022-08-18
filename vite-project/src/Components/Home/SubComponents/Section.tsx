import styled from "styled-components/macro"

const StyledSection = styled.div`
    width: 75%;
    margin: 0 auto;
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @media(max-height: 570px){
        font-size: 3rem;
    }

    @media(max-height: 450px){
        font-size: 2rem;
    }
`

function Section({children}: any){
    return(
        <StyledSection>
            {children}
        </StyledSection>
    )
}

export default Section