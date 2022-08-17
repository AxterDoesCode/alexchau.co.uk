import Title from "./SubComponents/Title"
import Section from "./SubComponents/Section"

export default function Home (){
    return(
        <main>
            <Section>
                <Title>Hello</Title>
                <Title>I'm <span className="home--name">Alex</span></Title>
            </Section>
        </main>
    )
}