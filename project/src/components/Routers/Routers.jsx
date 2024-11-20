import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Service from '../Service/Service'
import Articles from '../Articles/Articles'
import Touch from '../Touch/Touch'
import Partners from './../Partners/Partners';
const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path='/Articles' element={<Articles/>}/>
            <Route path='/Partners' element={<Partners/>}/>
            <Route path='/Touch' element={<Touch/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routers
