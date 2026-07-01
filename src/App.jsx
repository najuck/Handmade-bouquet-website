import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App