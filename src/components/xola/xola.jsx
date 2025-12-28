import React, { useState } from 'react'
import Opa from '../../imgs/opa.png'
import './xola.scss'
import { useLanguage } from '../../context/LanguageContext' // Context import qilish

const Xola = () => {
    const { translations, language } = useLanguage() // Tarjimalarni olish
    const [imageLoaded, setImageLoaded] = useState(false)
    const [hoveredContact, setHoveredContact] = useState(null)

    const setContactColor = (e, color) => {
        e.currentTarget.style.setProperty('--contact-color', color)
    }

    const clearContactColor = (e) => {
        e.currentTarget.style.removeProperty('--contact-color')
    }

    // Tilga qarab contact ma'lumotlarini yaratamiz
    const getContactInfo = () => {
        switch(language) {
            case 'ru':
                return [
                    {
                        id: 'phone',
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        ),
                        label: 'Телефон',
                        value: '+998 97 449 26 00',
                        href: 'tel:+998974492600',
                        color: '#10B981'
                    },
                    {
                        id: 'website',
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                            </svg>
                        ),
                        label: 'Веб-сайт',
                        value: 'www.uzbwomen.uz',
                        href: 'http://www.uzbwomen.uz',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        color: '#3B82F6'
                    },
                    {
                        id: 'email',
                        icon: (
                            <svg xmlns="http://www.w3.org2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383l-4.708 2.825L15 11.105zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        ),
                        label: 'Email',
                        value: 'ngouzbwomen@gmail.com',
                        href: 'mailto:ngouzbwomen@gmail.com',
                        color: '#EC4899'
                    }
                ]
            case 'en':
                return [
                    {
                        id: 'phone',
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        ),
                        label: 'Phone',
                        value: '+998 97 449 26 00',
                        href: 'tel:+998974492600',
                        color: '#10B981'
                    },
                    {
                        id: 'website',
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                            </svg>
                        ),
                        label: 'Website',
                        value: 'www.uzbwomen.uz',
                        href: 'http://www.uzbwomen.uz',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        color: '#3B82F6'
                    },
                    {
                        id: 'email',
                        icon: (
                            <svg xmlns="http://www.w3.org2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383l-4.708 2.825L15 11.105zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        ),
                        label: 'Email',
                        value: 'ngouzbwomen@gmail.com',
                        href: 'mailto:ngouzbwomen@gmail.com',
                        color: '#EC4899'
                    }
                ]
            default: // uz
                return [
                    {
                        id: 'phone',
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        ),
                        label: 'Telefon',
                        value: '+998 97 449 26 00',
                        href: 'tel:+998974492600',
                        color: '#10B981'
                    },
                    {
                        id: 'website',
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                            </svg>
                        ),
                        label: 'Veb-sayt',
                        value: 'www.uzbwomen.uz',
                        href: 'http://www.uzbwomen.uz',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        color: '#3B82F6'
                    },
                    {
                        id: 'email',
                        icon: (
                            <svg xmlns="http://www.w3.org2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383l-4.708 2.825L15 11.105zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        ),
                        label: 'Email',
                        value: 'ngouzbwomen@gmail.com',
                        href: 'mailto:ngouzbwomen@gmail.com',
                        color: '#EC4899'
                    }
                ]
        }
    }

    const contactInfo = getContactInfo()

    // Social media uchun tarjimalar
    const getSocialLinks = () => {
        const socialLinksData = {
            uz: [
                { name: 'Facebook', icon: 'facebook', href: '#' },
                { name: 'Telegram', icon: 'telegram', href: '#' },
                { name: 'LinkedIn', icon: 'linkedin', href: '#' }
            ],
            ru: [
                { name: 'Facebook', icon: 'facebook', href: '#' },
                { name: 'Telegram', icon: 'telegram', href: '#' },
                { name: 'LinkedIn', icon: 'linkedin', href: '#' }
            ],
            en: [
                { name: 'Facebook', icon: 'facebook', href: '#' },
                { name: 'Telegram', icon: 'telegram', href: '#' },
                { name: 'LinkedIn', icon: 'linkedin', href: '#' }
            ]
        }
        return socialLinksData[language] || socialLinksData.uz
    }

    const socialLinks = getSocialLinks()

    return (
        <div className='xola' id="contact">
            <div className='background-elements'>
                <div className='decor-circle circle-1'></div>
                <div className='decor-circle circle-2'></div>
                <div className='decor-circle circle-3'></div>
            </div>

            <div className='xola-container'>
                <div className='xola-content'>
                    <div className='profile-section'>
                        <div className={`image-wrapper ${imageLoaded ? 'loaded' : ''}`}>
                            <img
                                src={Opa}
                                alt={
                                    language === 'ru' 
                                        ? "Мирадилова Насиба Кадировна - Председатель Ассоциации женщин и девушек Узбекистана"
                                        : language === 'en'
                                            ? "Miradilova Nasiba Kadirovna - Chairperson of the Association of Women and Girls of Uzbekistan"
                                            : "Miradilova Nasiba Kadirovna - O'zbekiston ayollar va qizlar uyushmasi Raisi"
                                }
                                onLoad={() => setImageLoaded(true)}
                            />
                            <div className='image-overlay'>
                                <div className='overlay-text'>
                                    {language === 'ru' ? 'Председатель' : 
                                     language === 'en' ? 'Chairperson' : 'Rais'}
                                </div>
                            </div>
                            <div className='image-border'></div>
                        </div>

                        <div className='profile-badge'>
                            <div className='badge-icon'>👑</div>
                            <span>
                                {language === 'ru' ? 'Председатель ассоциации' : 
                                 language === 'en' ? 'Association Chairperson' : 'Uyushma Raisi'}
                            </span>
                        </div>
                    </div>

                    <div className='info-section'>
                        <div className='header-content'>
                            <div className='title-tag'>
                                <span className='tag-icon'>✦</span>
                                <span>
                                    {language === 'ru' ? 'Руководство' : 
                                     language === 'en' ? 'Leadership' : 'Rahbariyat'}
                                </span>
                            </div>

                            <h1 className='name-title'>
                                <span className='first-name'>
                                    {language === 'ru' ? 'Мирадилова' : 
                                     language === 'en' ? 'Miradilova' : 'Miradilova'}
                                </span>
                                <span className='last-name'>
                                    {language === 'ru' ? 'Насиба Кадировна' : 
                                     language === 'en' ? 'Nasiba Kadirovna' : 'Nasiba Kadirovna'}
                                </span>
                            </h1>

                            <div className='position'>
                                <span className='position-icon'>💼</span>
                                <span>
                                    {language === 'ru' ? 'Председатель Ассоциации женщин и девушек Узбекистана' : 
                                     language === 'en' ? 'Chairperson of the Association of Women and Girls of Uzbekistan' : 
                                     'O\'zbekiston ayollar va qizlar uyushmasi Raisi'}
                                </span>
                            </div>

                            <p className='bio'>
                                {language === 'ru' 
                                    ? 'Как руководитель с многолетним опытом активно участвует в защите прав женщин, социально-экономическом развитии и гендерном равенстве.' 
                                    : language === 'en'
                                    ? 'As a leader with many years of experience, she actively participates in the protection of women\'s rights, socio-economic development, and gender equality.'
                                    : 'Uzoq yillik tajribaga ega rahbar sifatida ayollar huquqlari himoyasi, ijtimoiy-iqtisodiy taraqqiyot va gender tengligi sohalarida faol ishtirok etmoqda.'}
                            </p>
                        </div>

                        <div className='contact-section'>
                            <h3 className='contact-title'>
                                {language === 'ru' ? 'Для связи:' : 
                                 language === 'en' ? 'For contact:' : 'Bog\'lanish uchun:'}
                            </h3>

                            <div className='contact-grid'>
                                {contactInfo.map((contact) => (
                                    <a
                                        key={contact.id}
                                        href={contact.href}
                                        target={contact.target}
                                        rel={contact.rel}
                                        className={`contact-card ${hoveredContact === contact.id ? 'hovered' : ''}`}
                                        onMouseEnter={(e) => {
                                            setHoveredContact(contact.id)
                                            e.currentTarget.style.setProperty('--contact-color', contact.color)
                                        }}
                                        onMouseLeave={(e) => {
                                            setHoveredContact(null)
                                            e.currentTarget.style.removeProperty('--contact-color')
                                        }}
                                    >
                                        <div className='contact-icon' style={{ color: contact.color }}>
                                            {contact.icon}
                                        </div>
                                        <div className='contact-details'>
                                            <div className='contact-label'>{contact.label}</div>
                                            <div className='contact-value'>{contact.value}</div>
                                        </div>
                                        <div className='contact-arrow'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className='social-section'>
                            <div className='social-title'>
                                {language === 'ru' ? 'Социальные сети:' : 
                                 language === 'en' ? 'Social networks:' : 'Ijtimoiy tarmoqlar:'}
                            </div>
                            <div className='social-links'>
                                {socialLinks.map((link) => (
                                    <a key={link.name} href={link.href} className='social-link'>
                                        {link.icon === 'facebook' && (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                        {link.icon === 'telegram' && (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                        {link.icon === 'linkedin' && (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                        <span>{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Xola