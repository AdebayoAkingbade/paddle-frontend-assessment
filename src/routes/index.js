import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter