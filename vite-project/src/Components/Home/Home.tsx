import Title from "./SubComponents/Title"
import Section from "./SubComponents/Section"

export default function Home (){
    return(
        <main>
            <Section>
                <Title className="animate-rise">Hello</Title>
                <Title className="animate-rise delay04">I'm <span className="home--name">Alex</span></Title>
            </Section>
        </main>
    )
}