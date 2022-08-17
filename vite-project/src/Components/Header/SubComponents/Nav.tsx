import styled from "styled-components/macro"
import { Link } from "react-router-dom"

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
    }
    
    .nav--link:hover{
        color: var(--light--hover);
    }
    
    .current{
        background-color: var(--dark--hover);
    }
`
export default function Nav(){

    function changeActiveLink(e: any){
        document.querySelector(".current")?.classList.remove("current")
        e.target.classList.add("current")
    }

    return(
        <StyledNav>
            <Link to="/" className="nav--link current" onClick={changeActiveLink}>Home</Link>
            <Link to="about" className="nav--link" onClick={changeActiveLink}>About</Link>
            <Link to="projects" className="nav--link" onClick={changeActiveLink}>Projects</Link>
            <Link to="contact" className="nav--link" onClick={changeActiveLink}>Contact</Link>  
        </StyledNav>
    )
}