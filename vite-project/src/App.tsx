import Home from './Components/Home/Home'
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"
import Header from "./Components/Header/Header"
import {Routes, Route, useLocation} from "react-router-dom"
import Footer from "./Components/Footer/Footer"

function App() {
  const currentPath = useLocation().pathname

  return(
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer currentPath={currentPath}/>
    </>
  )
}

export default App
