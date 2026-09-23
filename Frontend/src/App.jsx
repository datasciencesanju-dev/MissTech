import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import Placements from './Pages/Placements'
import Blog from './Pages/Blog'
import Training_modes from './Pages/Training_modes'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Enquiry from './Pages/Enquiry'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}  />
        <Route path='/Blog' element={<Blog/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Placements' element={<Placements/>}/>
        <Route path='/Training-modes' element={<Training_modes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/enquiry' element={<Enquiry/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
