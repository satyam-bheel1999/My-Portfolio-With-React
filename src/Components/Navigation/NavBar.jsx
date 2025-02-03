import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  const linkClass =
  "relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-green-600 after:left-0 after:-bottom-1.5 after:transition-all after:duration-500 hover:after:w-full";
  return (
    <div className='w-screen flex items-center h-16'>
      <nav className='flex flex-row justify-around w-screen text-white text-xl
      '>
        <Link to="/" className={linkClass}>Home</Link>
        <Link to="/project" className={linkClass}>Projects</Link>
        <Link to="/qualifications" className={linkClass}>Qualifications</Link>
        <Link to="/services" className={linkClass}>Services</Link>
        <Link to="/cantact" className={linkClass}>Contact</Link>
      </nav>
    </div>
  )
}


export default NavBar
