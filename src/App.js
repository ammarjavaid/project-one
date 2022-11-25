import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import HomePages from './components/homes/HomePages'
import Footer from './components/footer/Footer'
import SinglePage from './components/watch/SinglePage'
import Series from './pages/series/Series'
import Movies from './pages/movies/Movies'
import About from './pages/about/About'
import Pricing from './pages/pricing/Pricing'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/pages" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App