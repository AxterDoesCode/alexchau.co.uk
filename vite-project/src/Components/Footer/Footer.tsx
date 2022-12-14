import styled from "styled-components"
import { useLocation } from "react-router-dom"

const StyledFooter = styled.footer`
    color: var(--light);
    height: 10%;
    font-size: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: .66em;
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

    @media(max-width: 700px){
        height: 20%;
    }
`

export default function Footer(props: any){
    console.log(props.currentPath)
    if(props.currentPath === "/"){
        return(
            <StyledFooter className="animate-fly-right delay06">
                <a href="https://www.linkedin.com/in/alex-chau-dev/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://github.com/AxterDoesCode">
                    <i className="fa-brands fa-square-github"></i>
                </a>
            </StyledFooter>
        )
    }else{
        return(
            <>
            </>
        )
    }
}