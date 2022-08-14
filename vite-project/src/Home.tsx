import { Link } from "react-router-dom"
export default function Home (){
    return(
        <div className="Home">
            <h1 className="large"><Link to="about">Hello</Link></h1>
            <h1 className="large red"><Link to="projects">I am</Link></h1>
            <h1 className="large red"><Link to="contact">Alex</Link></h1>

        </div>
    )
}