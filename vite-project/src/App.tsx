import Home from './Components/Home/Home'
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"
import Header from "./Components/Header/Header"
import {Routes, Route} from "react-router-dom"

function App() {
  return(
    <>
      <Header />
      
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
