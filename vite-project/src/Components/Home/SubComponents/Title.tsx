import styled from "styled-components/macro"

const StyledTitle = styled.h1`
    color: var(--light);
    margin: 0;

    .home--name{
        font-family: 'Lobster Two', cursive;
        color: var(--accent);
        font-size: 1.3em;
    }
`

function Title({children, className}: any){
    return(
        <StyledTitle className={className}>
            {children}
        </StyledTitle>
    )
}

export default Title