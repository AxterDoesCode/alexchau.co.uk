import styled from "styled-components"
import { useState } from "react"

const StyledMain = styled.main`
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    padding: 0 2em;
    min-height: fit-content;
    gap: 1em;

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
    margin: 0;
`

const StyledPEmail = styled(StyledP)`
    color var(--accent);
    transition: 0.3s ease;
    font-size 1.5rem;
    text-decoration: none;
    &:hover{
        padding-left: 2em;
        cursor: pointer;
    }
`

export default function Contact(){
    const [emailText, setEmailText] = useState("alex@alexchau.co.uk")

    function changeEmailText(e: any){
        setEmailText("Copy to clipboard")
    }

    function changeCopyText(e: any){
        setEmailText("alex@alexchau.co.uk")
    }

    function copyEmail(){
        navigator.clipboard.writeText("alex@alexchau.co.uk")
        alert("Email copied to clipboard");
    }

    return(
        <StyledMain>
            <StyledH2 className="animate-rise delay04">Let's get in touch</StyledH2>
            <StyledP className="animate-fade delay06">
                Feel free to reach out through any of the platforms below:  
            </StyledP> 
            <StyledPEmail className="animate-fade delay06" onClick={copyEmail} onMouseEnter={changeEmailText} onMouseLeave={changeCopyText}>{emailText}</StyledPEmail>
            <StyledPEmail as="a" href="https://www.linkedin.com/in/alex-chau-dev/" className="animate-fade delay06">LinkedIn</StyledPEmail>
        </StyledMain>
    )
}