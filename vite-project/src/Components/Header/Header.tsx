import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Header.css"
export default function Header(){

  function changeActiveLink(e: any){
    document.querySelector(".current")?.classList.remove("current")
    e.target.classList.add("current")
  }

  return(
      <header>
      <nav className="header--nav">
        <Link to="/" className="nav--link current" onClick={changeActiveLink}>Home</Link>
        <Link to="about" className="nav--link" onClick={changeActiveLink}>About</Link>
        <Link to="projects" className="nav--link" onClick={changeActiveLink}>Projects</Link>
        <Link to="contact" className="nav--link" onClick={changeActiveLink}>Contact</Link>  
      </nav>
      <p className='header--name'>alex.chau</p>
    </header>
  )
}