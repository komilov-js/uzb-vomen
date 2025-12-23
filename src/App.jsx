import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/nav/nav'
import Home from './components/home/home'
import NewsDetail from './components/newsDetail/newsDetail'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

const AppContext = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppContext
