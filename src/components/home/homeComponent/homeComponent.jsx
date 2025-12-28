import React, { useState, useEffect } from 'react'
import './homeComponent.scss'
import { useLanguage } from '../../../context/LanguageContext' // Context import qilish

const HomeComponent = () => {
    const { translations } = useLanguage() // Tarjimalarni olish
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className='home-components'>
            <div className='background-pattern'></div>
            
            <div className={`home-component ${isVisible ? 'visible' : ''}`}>
                <div className='content-wrapper'>
                    <div className='home-text'>
                        <div className='text-container'>
                            <div className='title-tag'>
                                <span className='tag-icon'>✦</span>
                                {/* Tarjima qo'llash */}
                                <span>{translations.organizationName || "O'zbekiston Ayollar Uyushmasi"}</span>
                            </div>
                            
                            <h1 className='main-title'>
                                <span className='title-line'>{translations.titleLine1 || "Ayollarning"}</span>
                                <span className='title-line accent'>{translations.titleLine2 || "Ijtimoiy va Iqtisodiy"}</span>
                                <span className='title-line'>{translations.titleLine3 || "Taraqqiyotiga Yo'naltirilgan Kuch"}</span>
                            </h1>
                            
                            <p className='subtitle'>
                                {translations.subtitle || "Biz ayollarning salohiyatini ochish, ularning huquqlarini himoya qilish va jamiyatning har bir sohasida faol ishtirok etishini ta'minlash uchun kurashamiz."}
                            </p>
                            
                            <div className='features-grid'>
                                <div className='feature-item'>
                                    <div className='feature-icon'>👩‍💼</div>
                                    <span>{translations.feature1 || "Kasbiy rivojlanish"}</span>
                                </div>
                                <div className='feature-item'>
                                    <div className='feature-icon'>⚖️</div>
                                    <span>{translations.feature2 || "Huquqiy himoya"}</span>
                                </div>
                                <div className='feature-item'>
                                    <div className='feature-icon'>📚</div>
                                    <span>{translations.feature3 || "Ta'lim dasturlari"}</span>
                                </div>
                            </div>
                            
                            <div className='cta-buttons'>
                                <button className='primary-btn'>
                                    <span>{translations.contactUs || "Biz bilan bog'lanish"}</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <button className='secondary-btn'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" fill="currentColor"/>
                                        <path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" fill="currentColor"/>
                                        <path d="M3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10Z" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <span>{translations.watchVideo || "Video qarang"}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='home-media'>
                        <div className='media-container'>
                            <div className='video-wrapper'>
                                <div className='video-frame'>
                                    <iframe 
                                        src="https://www.youtube.com/embed/Gx9omp9mUdI?si=7_dEg-ehHB-sTVGx&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            
                            <div className='testimonial-card'>
                                <div className='testimonial-text'>
                                    {translations.testimonial || `"Uyushma mening hayotimni o'zgartirdi. Endi o'z biznesim bor va mustaqilman."`}
                                </div>
                                <div className='testimonial-author'>
                                    <div className='author-avatar'>A</div>
                                    <div className='author-info'>
                                        <div className='author-name'>{translations.testimonialName || "Aziza Qobilova"}</div>
                                        <div className='author-role'>{translations.testimonialRole || "Tadbirkor"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='partners-section'>
                    <div className='partners-label'>{translations.ourPartners || "Bizning hamkorlarimiz:"}</div>
                    <div className='partners-grid'>
                        <div className='partner-logo'>UN Women</div>
                        <div className='partner-logo'>UNDP</div>
                        <div className='partner-logo'>UNESCO</div>
                        <div className='partner-logo'>O'zR</div>
                        <div className='partner-logo'>USAID</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent