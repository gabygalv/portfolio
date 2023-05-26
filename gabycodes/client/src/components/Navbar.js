import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="linkys ui text menu">
            <Link className="linkys item" to="/home">Home</Link>
            <Link className="linkys item" to="/resume">Resume</Link>
            <Link className="linkys item" to="/projects">Projects</Link>
            <Link className="linkys item" to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar