import styled from "styled-components"

const StyledMain = styled.main`
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    padding: 0 2em;
    min-height: 80%;

    @media(min-width: 700px){
        padding: 4em;
    }

    @media(min-width: 900px){
        padding: 10em;
    }

    @media(min-width: 1100px){
        padding: 13em;
    }
`

const StyledH2 = styled.h2`
    color: var(--light);
    font-size: 3rem;
    margin: 0;
`

const StyledP = styled.p`
    color: var(--light);
    font-size: 2rem;
    line-height: 1.6em;
    letter-spacing: .8px;
`

export default function Projects(){
    return(
        <StyledMain>
            <StyledH2 className="animate-rise delay04">What I'm working on</StyledH2>
            <StyledP className="animate-fade delay06">
                University term has started so I'm learning C and developing my knowledge in algorithms.
            </StyledP>
        </StyledMain>
    )
}