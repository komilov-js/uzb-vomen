import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/nav/nav'
import Home from './components/home/home'
import NewsDetail from './components/newsDetail/newsDetail'
import Footer from './components/footer/footer'
import { LanguageProvider } from './context/LanguageContext'
import News from './components/news/news'
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        {/* <Route path="/all-news" element={<AllNewsPage />} /> */}
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  )
}

const AppContext = () => {
  return (
    <BrowserRouter>
      <LanguageProvider >
        <App />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default AppContext
