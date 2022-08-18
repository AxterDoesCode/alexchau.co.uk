import styled from "styled-components"

const StyledFooter = styled.footer`
    color: var(--light);
    max-height: 10%;
    font-size: 3rem;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 1em;
    gap: .5em;
    overflow: hidden;

    a{
        text-decoration: none;
        color: inherit;
        margin: 0;
        padding: 0;
        transition: all 0.2s ease;
    }

    a:hover{
        color: var(--light--hover);
    }
`

export default function Footer(){
    return(
        <StyledFooter className="animate-rise delay06">
            <a href="https://www.linkedin.com/in/alex-chau-dev/">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/AxterDoesCode">
                <i className="fa-brands fa-square-github"></i>
            </a>
        </StyledFooter>
    )
}