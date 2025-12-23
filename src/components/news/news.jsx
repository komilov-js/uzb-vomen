import React from 'react'
import { Link } from 'react-router-dom'
import './news.scss'

const News = () => {
  const news = [
    {
      id: 1,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Uyushmaning ko‘p yillik faoliyati e’tirof etildi.'
    },
    {
      id: 2,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Yurtboshimiz tomonidan taqdirlandi.'
    },
    {
      id: 3,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Yangi loyiha ishga tushdi.'
    },
  ]

  return (
    <div className="news">
      <h1>Yangiliklar</h1>

      <div className="news-container">
        {news.map(item => (
          <Link
            to={`/news/${item.id}`}
            key={item.id}
            className="news-link"
          >
            <div className="news-item">
              <img src={item.img} alt="" />
              <div className="text-news">
                <p>{item.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default News
