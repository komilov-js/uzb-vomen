import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './news.scss'
import { useLanguage } from '../../context/LanguageContext' // Yo'lni to'g'rilang

const News = () => {
  const { language, translations } = useLanguage()
  const [allNews, setAllNews] = useState([]) // Barcha yangiliklar
  const [displayNews, setDisplayNews] = useState([]) // Ko'rsatiladigan 6ta yangilik
  const [hoveredId, setHoveredId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Til parametri bilan so'rov
        const endpoint = `http://127.0.0.1:8000/yangliklar/?format=json&lang=${language}`
        
        
        const response = await fetch(endpoint)
        
        if (!response.ok) {
          throw new Error(`HTTP xato! Status: ${response.status}`)
        }
        
        const data = await response.json()
        console.log('📊 API Response:', data)
        
        // DRF pagination - results arrayini olish
        const newsData = data.results || data
        
        console.log(`📈 Total news found: ${newsData.length}`)
        
        // Ma'lumotlarni filtrlaymiz va tartiblaymiz
        const filteredNews = newsData
          .filter(item => {
            // Nom va kontentni tekshirish
            const hasTitle = item.yangilik_nomi && item.yangilik_nomi.trim().length > 0
            const hasContent = item.yangilik_xaqida && item.yangilik_xaqida.trim().length > 0
            const isValidTitle = hasTitle && item.yangilik_nomi.toLowerCase() !== 'ru'
            
            return (isValidTitle || hasContent)
          })
          .sort((a, b) => {
            // created_at bo'yicha tartiblash (eng yangisi birinchi)
            return new Date(b.created_at) - new Date(a.created_at)
          })
        
        
        // Oxirgi 6ta yangilikni olish
        const latestNews = filteredNews.slice(0, 6)
        
        setAllNews(filteredNews)
        setDisplayNews(latestNews)
        setTotalCount(filteredNews.length)
        
        // Har bir yangilikni console da ko'rish
        filteredNews.forEach((item, index) => {
          console.log(`📰 News ${index + 1}:`, {
            id: item.id,
            title: item.yangilik_nomi,
            content: item.yangilik_xaqida?.substring(0, 50) + '...',
            image: item.yangilik_rasmi,
            created: item.created_at
          })
        })
        
      } catch (err) {
        console.error(' Xato:', err)
        setError(err.message)
        
        // Fallback test ma'lumotlari
        const fallbackNews = generateFallbackNews(language)
        const latestFallback = fallbackNews.slice(0, 6)
        
        setAllNews(fallbackNews)
        setDisplayNews(latestFallback)
        setTotalCount(fallbackNews.length)
        setError(null)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [language])

  // Fallback ma'lumotlarni yaratish
  const generateFallbackNews = (lang) => {
    const newsTemplates = {
      uz: {
        titles: [
          "Ayollar biznesi uchun yangi grant dasturi",
          "Huquqiy maslahat markazi ochildi",
          "Xalqaro hamkorlik kelishuvlari",
          "Tadbirkor ayollar uchun treninglar",
          "Yosh qizlar uchun ta'lim dasturi",
          "Gender tengligi bo'yicha seminarlar",
          "Ayollar sog'lig'ini muhokama qilish",
          "Biznes rivojlantirish bo'yicha maslahatlar"
        ],
        contents: [
          "Uyushma ayollar tadbirkorligini qo'llab-quvvatlash maqsadida yangi grant dasturini ishga tushirdi.",
          "Huquqiy maslahat markazi ayollarning huquqlarini himoya qilish bo'yicha bepul konsultatsiyalar beradi.",
          "Xalqaro tashkilotlar bilan yangi hamkorlik kelishuvlari imzolandi.",
          "Tadbirkor ayollar uchun biznes boshqaruvi va moliyaviy savodxonlik bo'yicha treninglar o'tkazildi.",
          "Yosh qizlar uchun zamonaviy kasblar bo'yicha ta'lim dasturlari ishga tushirildi.",
          "Gender tengligi va ayollar huquqlari bo'yicha bir qator seminarlar o'tkazildi.",
          "Ayollar reproduktiv salomatligi va psixologik yordam bo'yicha seminar bo'lib o'tdi.",
          "Kichik biznes rivojlantirish bo'yicha mutaxassislar tomonidan maslahatlar berildi."
        ]
      },
      ru: {
        titles: [
          "Новая программа грантов для женского бизнеса",
          "Открыт центр юридических консультаций",
          "Международные соглашения о сотрудничестве",
          "Тренинги для женщин-предпринимателей",
          "Образовательная программа для девушек",
          "Семинары по гендерному равенству",
          "Обсуждение здоровья женщин",
          "Консультации по развитию бизнеса"
        ],
        contents: [
          "Ассоциация запустила новую программу грантов для поддержки женского предпринимательства.",
          "Центр юридических консультаций предоставляет бесплатные консультации по защите прав женщин.",
          "Подписаны новые соглашения о сотрудничестве с международными организациями.",
          "Проведены тренинги по управлению бизнесом и финансовой грамотности для женщин-предпринимателей.",
          "Запущены образовательные программы по современным профессиям для девушек.",
          "Проведен ряд семинаров по гендерному равенству и правам женщин.",
          "Состоялся семинар по репродуктивному здоровью женщин и психологической помощи.",
          "Специалисты провели консультации по развитию малого бизнеса."
        ]
      },
      en: {
        titles: [
          "New grant program for women's business",
          "Legal advice center opened",
          "International cooperation agreements",
          "Trainings for women entrepreneurs",
          "Education program for girls",
          "Seminars on gender equality",
          "Discussion on women's health",
          "Business development consultations"
        ],
        contents: [
          "The association has launched a new grant program to support women's entrepreneurship.",
          "The legal advice center provides free consultations on protecting women's rights.",
          "New cooperation agreements have been signed with international organizations.",
          "Trainings on business management and financial literacy were conducted for women entrepreneurs.",
          "Educational programs on modern professions have been launched for girls.",
          "A series of seminars on gender equality and women's rights were held.",
          "A seminar on women's reproductive health and psychological assistance was held.",
          "Specialists provided consultations on small business development."
        ]
      }
    }

    const template = newsTemplates[lang] || newsTemplates.uz
    
    return Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      yangilik_rasmi: `https://images.unsplash.com/photo-${1555949963 + index}-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80`,
      yangilik_nomi: template.titles[index] || `Yangilik ${index + 1}`,
      yangilik_xaqida: template.contents[index] || "Yangilik haqida ma'lumot",
      created_at: new Date(Date.now() - index * 86400000).toISOString() // Har kunga 1 kun
    }))
  }

  // Tilga qarab matnlar
  const getTranslatedTexts = () => {
    const texts = {
      uz: {
        newsTitle: "Yangiliklar",
        newsSubtitle: "Uyushmaning so'nggi voqea va faoliyatlari haqida yangiliklar",
        allNews: "Barcha yangiliklar",
        details: "Batafsil",
        category: "Yangilik",
        loading: "Yuklanmoqda...",
        error: "Yangiliklarni yuklashda xato",
        tryAgain: "Qayta urinish",
        noNews: "Hozircha yangiliklar yo'q",
        viewAll: "Barcha yangiliklar",
        latestNews: "Oxirgi 6 ta yangilik",
        seeAll: "Barchasini ko'rish"
      },
      ru: {
        newsTitle: "Новости",
        newsSubtitle: "Последние события и новости о деятельности ассоциации",
        allNews: "Все новости",
        details: "Подробнее",
        category: "Новость",
        loading: "Загрузка...",
        error: "Ошибка загрузки новостей",
        tryAgain: "Попробовать снова",
        noNews: "Новостей пока нет",
        viewAll: "Все новости",
        latestNews: "Последние 6 новостей",
        seeAll: "Посмотреть все"
      },
      en: {
        newsTitle: "News",
        newsSubtitle: "Latest events and news about association activities",
        allNews: "All news",
        details: "Details",
        category: "News",
        loading: "Loading...",
        error: "Error loading news",
        tryAgain: "Try again",
        noNews: "No news available",
        viewAll: "All news",
        latestNews: "Latest 6 news",
        seeAll: "See all"
      }
    }

    return texts[language] || texts.uz
  }

  const t = getTranslatedTexts()

  // Loading holati
  if (loading) {
    return (
      <div className="news-loading" id="news">
        <div className="loading-spinner"></div>
        <p>{t.loading}</p>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          {language === 'uz' ? 'Til:' : language === 'ru' ? 'Язык:' : 'Language:'} {language}
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="news-error" id="news">
        <p>{t.error}</p>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          {error}
        </p>
        <button onClick={() => window.location.reload()}>
          {t.tryAgain}
        </button>
      </div>
    )
  }

  return (
    <div className="news" id="news">
      <div className="news-header">
        <h1>{t.newsTitle}</h1>
        <p className="news-subtitle">{t.newsSubtitle}</p>
        
        {totalCount > 0 && (
          <div className="news-stats">
            <span className="news-count">
              {t.latestNews} • {totalCount} {language === 'uz' ? 'ta yangilik' : language === 'ru' ? 'новостей' : 'news'}
            </span>
          </div>
        )}
      </div>

      {displayNews.length > 0 ? (
        <>
          <div className="news-container">
            {displayNews.map((item, index) => {
              // Agar nom bo'sh bo'lsa, default nom beramiz
              const title = item.yangilik_nomi && item.yangilik_nomi.trim() 
                ? item.yangilik_nomi 
                : `${t.category} ${index + 1}`
              
              // Agar matn bo'sh bo'lsa, default matn beramiz
              const content = item.yangilik_xaqida && item.yangilik_xaqida.trim()
                ? item.yangilik_xaqida
                : language === 'ru' 
                  ? 'Описание новости скоро будет добавлено' 
                  : language === 'en' 
                    ? 'News description will be added soon'
                    : 'Yangilik haqida ma\'lumot tez orada qo\'shiladi'
              
              return (
                <Link
                  to={`/news/${item.id}?lang=${language}`}
                  key={item.id || `news-${index}`}
                  className="news-link"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className={`news-item ${hoveredId === item.id ? 'hovered' : ''}`}>
                    <div className="news-image-container">
                      <img
                        src={
                          item.yangilik_rasmi 
                            ? item.yangilik_rasmi 
                            : `https://images.unsplash.com/photo-${1555949963 + index}-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80`
                        }
                        alt={title}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `https://images.unsplash.com/photo-${1579546929662 + index}-711aa81148cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80`
                        }}
                      />
                      <div className="news-overlay">
                        <div className="news-date">
                          {new Date(item.created_at).toLocaleDateString(language === 'ru' ? 'ru-RU' : language === 'en' ? 'en-US' : 'uz-UZ', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="news-content">
                      <div className="news-category">{t.category}</div>
                      <h3 className="news-title">{title}</h3>
                      <p className="news-excerpt">
                        {content.slice(0, 100)}...
                      </p>

                      <div className="news-meta">
                        <span className="news-cta">
                          {t.details}
                          <span className="cta-arrow"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {totalCount > 6 && (
            <div className="news-footer">
              <div className="news-total">
                {language === 'uz' 
                  ? `Jami ${totalCount} ta yangilik mavjud` 
                  : language === 'ru'
                    ? `Всего ${totalCount} новостей`
                    : `Total ${totalCount} news available`
                }
              </div>
              <Link to={`/all-news?lang=${language}`} className="news-see-all-btn">
                {t.seeAll} ({totalCount})
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="no-news">
          <p>{t.noNews}</p>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
            {language === 'uz' 
              ? 'Admin panel orqali yangilik qo\'shing yoki yangiliklarni to\'ldiring.' 
              : language === 'ru'
                ? 'Добавьте новости через админ-панель или заполните информацию о новостях.'
                : 'Add news through the admin panel or fill in the news information.'
            }
          </p>
          <Link 
            to="http://127.0.0.1:8000/admin" 
            target="_blank" 
            className="admin-link"
            style={{
              display: 'inline-block',
              marginTop: '15px',
              padding: '10px 20px',
              backgroundColor: '#5d4d92',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '600'
            }}
          >
            {language === 'uz' ? 'Admin panelga o\'tish' : language === 'ru' ? 'Перейти в админ-панель' : 'Go to Admin Panel'}
          </Link>
        </div>
      )}
    </div>
  )
}

export default News