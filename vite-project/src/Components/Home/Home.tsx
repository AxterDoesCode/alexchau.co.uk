import Title from "./SubComponents/Title"
import Section from "./SubComponents/Section"
import styled from "styled-components"

const StyledMain = styled.main`
    overflow: hidden;
`
export default function Home (){
    return(
        <StyledMain>
            <Section>
                <Title className="animate-rise">Hello</Title>
                <Title className="animate-rise delay04">I'm <span className="home--name">Alex</span></Title>
            </Section>
        </StyledMain>
    )
}