import Home from './Home'
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import {Link, Routes, Route} from "react-router-dom"
function App() {
  return(
    <>
      <header>
        <nav className="nav">
          <Link to="/" className="nav--link">Home</Link>
          <Link to="about" className="nav--link">About</Link>
          <Link to="projects" className="nav--link">Projects</Link>
          <Link to="contact" className="nav--link">Contact</Link>  
        </nav>
        <p className='name'>alex.chau</p>
      </header>

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
