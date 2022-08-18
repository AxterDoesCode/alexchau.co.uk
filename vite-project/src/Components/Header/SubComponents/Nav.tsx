import styled from "styled-components/macro"
import { Link, useLocation } from "react-router-dom"
import linkData from "./linkData.json"

const StyledNav = styled.nav`
    justify-self: center;
    grid-area: nav;
    width: fit-content;
    display: flex;
    gap: 1.5em;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #30363D;
    border-radius: 2em;
    padding: 0.3em;

    .nav--link{
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--light);
        padding: 0.5em 1em;
        border-radius: 2em;
        transition: all 0.2s linear;
    }
    
    .nav--link:hover{
        color: var(--light--hover);
    }

    @media(max-width: 390px){
        .nav--link{
            font-size: 1.2rem;
        }
    }
    
    .current{
        background-color: var(--dark--hover);
    }
`
export default function Nav(){

    const currentPath = useLocation().pathname

    const linkArray = linkData.map((data, index)=> {
        return(
            <Link to={data.url} key={index} className={`nav--link ${currentPath === data.url? "current": ""}`}>{data.name}</Link>
        )
    })

    return(
        <StyledNav>
            {linkArray}
        </StyledNav>
    )
}