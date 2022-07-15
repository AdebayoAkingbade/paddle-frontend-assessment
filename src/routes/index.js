import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Github from '../pages/Github'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="comingsoon" element={<Home />} />
            <Route path="github" element={<Github />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<Navigate to="/comingsoon" />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter