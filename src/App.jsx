import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Projects from './pages/Projects'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Footer from './components/Footer/Footer'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Admin from './pages/Admin'

const App = () => {
  return (
    
    <>
    <CustomCursor/>
    <Header/>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App