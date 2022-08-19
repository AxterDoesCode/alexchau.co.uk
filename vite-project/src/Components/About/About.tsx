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

export default function About(){
    return(
        <StyledMain>
            <StyledH2 className="animate-rise delay04">About Me</StyledH2>
            <StyledP className="animate-fade delay06">
                I'm Alex, a developer and student studying Computer Systems Engineering 
                at Queen Mary University of London. According to my current skillset you could label me a frontend developer.
                Although I'm more akin to simply solving problems I find interesting and learning how to do so. In my free time
                I like to read, listen to podcasts and go to the gym.
            </StyledP>
        </StyledMain>
    )
}