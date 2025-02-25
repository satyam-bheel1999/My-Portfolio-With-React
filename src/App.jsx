import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navigation/NavBar'
import Home from './Components/Navigation/Home'
import Projects from './Components/Navigation/Projects'
import Services from './Components/Navigation/Services'
import Contact from './Components/Navigation/Contact'
import Qualifications from './Components/Navigation/Qualifications'
function App() {
  return (
    <div className='bg-black'>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/project' element = {<Projects />} />
          <Route path='/qualifications' element = {<Qualifications/>}/>
          <Route path='/services' element = {<Services/>}/>
          <Route path='/contact' element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
