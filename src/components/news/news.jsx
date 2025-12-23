import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './news.scss'

const News = () => {
  const [hoveredId, setHoveredId] = useState(null)
  
  const news = [
    {
      id: 1,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Uyushmaning ko‘p yillik faoliyati e\'tirof etildi.',
      date: '2025-12-07',
      excerpt: 'Ushbu marosimda uyushmaning so‘nggi yillardagi faoliyati va erishilgan yutuqlari yuqori baholandi.'
    },
    {
      id: 2,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Yurtboshimiz tomonidan taqdirlandi.',
      date: '2025-12-05',
      excerpt: 'Prezident tomonidan uyushma faollari mukofotlar bilan taqdirlandi.'
    },
    {
      id: 3,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Yangi loyiha ishga tushdi.',
      date: '2025-12-03',
      excerpt: 'Ayollarning kasbiy ko\'nikmalarini oshirish uchun yangi loyiha boshlab yuborildi.'
    },
    {
      id: 4,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Xalqaro hamkorlik muzokaralari',
      date: '2025-11-28',
      excerpt: 'Xalqaro tashkilotlar bilan yangi hamkorlik dasturlari bo\'yicha muzokaralar olib borildi.'
    },
    {
      id: 5,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Trening va seminarlar seriyasi',
      date: '2025-11-25',
      excerpt: 'Ayollar uchun biznes va IT sohalarida treninglar o\'tkazildi.'
    },
    {
      id: 6,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Ijtimoiy himoya dasturlari',
      date: '2025-11-20',
      excerpt: 'Nogiron ayollar uchun ijtimoiy himoya dasturlari kengaytirildi.'
    }
  ]

  return (
    <div className="news" id="news">
      <div className="news-header">
        <h1>Yangiliklar</h1>
        <p className="news-subtitle">Uyushmaning so'nggi voqea va faoliyatlari haqida yangiliklar</p>
        <Link to="/news" className="view-all-btn">
          Barcha yangiliklar <span className="arrow">→</span>
        </Link>
      </div>

      <div className="news-container">
        {news.map(item => (
          <Link
            to={`/news/${item.id}`}
            key={item.id}
            className="news-link"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-label={`${item.title} yangiligi`}
          >
            <div className={`news-item ${hoveredId === item.id ? 'hovered' : ''}`}>
              <div className="news-image-container">
                <img 
                  src={item.img} 
                  alt={item.title}
                  loading="lazy"
                />
                <div className="news-date">
                  <span className="date-day">{new Date(item.date).getDate()}</span>
                  <span className="date-month">
                    {new Date(item.date).toLocaleString('uz-UZ', { month: 'short' })}
                  </span>
                </div>
                <div className="news-overlay"></div>
              </div>
              
              <div className="news-content">
                <div className="news-category">Yangilik</div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <div className="news-meta">
                  <span className="read-time">2 daqiqa o'qish</span>
                  <span className="news-cta">Batafsil</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="news-mobile-view-all">
        <Link to="/news" className="mobile-view-all-btn">
          Barcha yangiliklar
        </Link>
      </div>
    </div>
  )
}

export default News