import './newsDetail.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLanguage } from '../../context/LanguageContext' // Til context import qilish

const NewsDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { language, translations } = useLanguage() // Til ma'lumotlarini olish
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [relatedNews, setRelatedNews] = useState([])

  useEffect(() => {
    // API orqali olish - til parametri bilan
    axios.get(`http://127.0.0.1:8000/yangliklar/${id}/?lang=${language}`)
      .then(res => {
        setItem(res.data)
        setLoading(false)

        // Tegishli yangiliklarni olish
        fetchRelatedNews()
      })
      .catch(err => {
        console.error('Yangilik detail xatosi:', err)
        setError('Yangilik topilmadi')
        setLoading(false)
      })
  }, [id, language]) // language o'zgarganida qayta yuklash

  const fetchRelatedNews = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/yangliklar/?format=json&lang=${language}`)
      const allNews = response.data.results || response.data

      // Joriy yangilikdan tashqari boshqa yangiliklarni olish
      const related = allNews
        .filter(news => news.id !== parseInt(id))
        .sort(() => Math.random() - 0.5) // Tasodifiy tartiblash
        .slice(0, 3) // Faqat 3ta tegishli yangilik

      setRelatedNews(related)
    } catch (err) {
      console.error('Tegishli yangiliklarni olishda xato:', err)
    }
  }

  // Tilga qarab matnlar
  const getTranslatedTexts = () => {
    const texts = {
      uz: {
        loading: "Yuklanmoqda...",
        error: "Yangilik topilmadi",
        notFound: "Yangilik topilmadi",
        back: "← Orqaga",
        backToNews: "Yangiliklar sahifasiga qaytish",
        published: "Nashr qilindi",
        readTime: "daqiqa o'qish",
        share: "Ulashish",
        relatedNews: "Tegishli yangiliklar",
        allNews: "Barcha yangiliklar",
        viewAll: "Barchasini ko'rish",
        minutesRead: "daqiqa o'qish",
        byAssociation: "Uyushma tomonidan",
        category: "Yangilik"
      },
      ru: {
        loading: "Загрузка...",
        error: "Новость не найдена",
        notFound: "Новость не найдена",
        back: "← Назад",
        backToNews: "Вернуться к новостям",
        published: "Опубликовано",
        readTime: "минут чтения",
        share: "Поделиться",
        relatedNews: "Похожие новости",
        allNews: "Все новости",
        viewAll: "Посмотреть все",
        minutesRead: "минут чтения",
        byAssociation: "Ассоциацией",
        category: "Новость"
      },
      en: {
        loading: "Loading...",
        error: "News not found",
        notFound: "News not found",
        back: "← Back",
        backToNews: "Back to news",
        published: "Published",
        readTime: "min read",
        share: "Share",
        relatedNews: "Related news",
        allNews: "All news",
        viewAll: "View all",
        minutesRead: "min read",
        byAssociation: "By Association",
        category: "News"
      }
    }

    return texts[language] || texts.uz
  }

  const t = getTranslatedTexts()

  // O'qish vaqtini hisoblash (so'zlar soni bo'yicha)
  const calculateReadTime = (text) => {
    if (!text) return 2
    const wordCount = text.split(/\s+/).length
    const wordsPerMinute = 200
    return Math.ceil(wordCount / wordsPerMinute)
  }

  // Sana formatlash
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }

    const locales = {
      uz: 'uz-UZ',
      ru: 'ru-RU',
      en: 'en-US'
    }

    return date.toLocaleDateString(locales[language] || 'uz-UZ', options)
  }

  if (loading) {
    return (
      <div className="news-detail-loading">
        <div className="loading-spinner"></div>
        <p>{t.loading}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="news-detail-error">
        <h2>{t.error}</h2>
        <button onClick={() => navigate('/')} className="back-home-btn">
          {t.backToNews}
        </button>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="news-detail-not-found">
        <h2>{t.notFound}</h2>
        <button onClick={() => navigate('/')} className="back-home-btn">
          {t.backToNews}
        </button>
      </div>
    )
  }

  const readTime = calculateReadTime(item.yangilik_xaqida)

  return (
    <div className="news-detail">
      {/* Orqaga qaytish tugmasi */}
      <div className="detail-back">
        <button onClick={() => navigate(-1)} className="back-btn">
          {t.back}
        </button>
      </div>

      <div className="detail-wrapper">
        {/* Yangilik rasmi */}
        <div className="detail-hero">
          <div className="detail-img">
            <img
              src={item.yangilik_rasmi || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=600&q=80'}
              alt={item.yangilik_nomi}
            />
          </div>

          {/* Yangilik meta ma'lumotlari */}
          <div className="detail-meta">
            <div className="meta-category">
              <span className="category-badge">{t.category}</span>
            </div>
            <div className="meta-info">
              <span className="meta-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg> {t.published}: {formatDate(item.created_at)}
              </span>
              {/* <span className="meta-read-time">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>{readTime} {t.minutesRead}
              </span> */}
              {/* <span className="meta-author">
                👥 {t.byAssociation}
              </span> */}
            </div>
          </div>
        </div>

        {/* Yangilik kontenti */}
        <div className="detail-content">
          <h1 className="detail-title">{item.yangilik_nomi}</h1>

          {/* Sotsial ulashish tugmalari */}
          <div className="detail-share">
            <span className="share-label">{t.share}:</span>
            <div className="share-buttons">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn facebook"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(item.yangilik_nomi)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn twitter"
              >
                Twitter
              </a>
              <a
                href={`https://t.me/share/url?url=${window.location.href}&text=${encodeURIComponent(item.yangilik_nomi)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn telegram"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Yangilik matni */}
          <div className="detail-text">
            <p>{item.yangilik_xaqida}</p>
          </div>

          {/* Tegishli yangiliklar */}
          {relatedNews.length > 0 && (
            <div className="related-news">
              <h3 className="related-title">{t.relatedNews}</h3>
              <div className="related-grid">
                {relatedNews.map(relatedItem => (
                  <div
                    key={relatedItem.id}
                    className="related-card"
                    onClick={() => navigate(`/news/${relatedItem.id}?lang=${language}`)}
                  >
                    <div className="related-card-image">
                      <img
                        src={relatedItem.yangilik_rasmi || 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=180&q=80'}
                        alt={relatedItem.yangilik_nomi}
                      />
                    </div>
                    <div className="related-card-content">
                      <h4>{relatedItem.yangilik_nomi}</h4>
                      <p>{relatedItem.yangilik_xaqida?.substring(0, 80)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Barcha yangiliklarga qaytish */}
          <div className="detail-footer">
            <button
              onClick={() => navigate(`/?lang=${language}#news`)}
              className="all-news-btn"
            >
              ← {t.allNews}
            </button>
            <button
              onClick={() => navigate('/news')}
              className="view-all-btn"
            >
              {t.viewAll} →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail