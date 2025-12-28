import React, { useEffect, useRef, useState } from 'react'
import './about.scss'
import Logo from '../../imgs/logo.png'
import { useLanguage } from '../../context/LanguageContext' // Context import qilish

const About = () => {
  const { translations } = useLanguage() // Tarjimalarni olish
  const imgRef = useRef(null)
  const aboutRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current || !aboutRef.current) return

      const rect = aboutRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if element is in viewport
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setIsVisible(true)
        
        const progress = 1 - (rect.top / windowHeight)
        let scale = 1 + progress * 0.3

        // Clamp scale between 1 and 1.3
        scale = Math.min(Math.max(scale, 1), 1.3)
        imgRef.current.style.transform = `scale(${scale})`
      } else {
        setIsVisible(false)
        imgRef.current.style.transform = 'scale(1)'
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='about' ref={aboutRef} id="about">
      <h1 className={`about-title ${isVisible ? 'visible' : ''}`}>
        {translations.aboutTitle || "Biz haqimizda"}
      </h1>

      <div className='container-about'>
        <div className='image-wrapper'>
          <img 
            src={Logo} 
            alt="O'zbekiston ayollar va qizlar uyushmasi logosi" 
            className={`about-img ${isVisible ? 'visible' : ''}`} 
            ref={imgRef} 
          />
        </div>

        <div className={`about-text ${isVisible ? 'visible' : ''}`}>
          <h2>{translations.aboutOrganizationName || "O'zbekiston ayollar va qizlar uyushmasi"}</h2>
          <p>
            {translations.aboutDescription1 || 
              "O'zbekiston ayollar va qizlar uyushmasi – davlat ro'yxatidan " +
              "2021-yil 15-iyulda belgilangan tartibda O'zbekiston Respublikasi " +
              "Adliya vazirligida ro'yxatdan o'tdi. 2021-yil 24-avgustda Nodavlat " +
              "notijorat tashkilotining ramzi davlat ro'yxatidan o'tdi."
            }
          </p>
          <p className='additional-text'>
            {translations.aboutDescription2 || 
              "Uyushma ayollarning huquq va imkoniyatlarini himoya qilish, " +
              "ularning ijtimoiy-iqtisodiy faolligini oshirish, " +
              "ta'lim va sog'liqni saqlash sohalarida yordam ko'rsatish " +
              "maqsadida faoliyat yuritadi."
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default About