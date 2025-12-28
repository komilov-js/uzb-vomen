import React, { useState, useEffect, useRef } from 'react'
import Logo from '../../imgs/logo.png'
import './nav.scss'
import Uz from '../../imgs/uz.svg'
import Ru from '../../imgs/ru.svg'
import En from '../../imgs/en.svg'
import { useLanguage } from '../../context/LanguageContext'
import { Link } from 'react-router-dom'
const Nav = () => {
    const { language, translations, changeLanguage } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState(translations.language)
    const [selectedFlag, setSelectedFlag] = useState(Uz)
    const languageRef = useRef(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleLanguageModal = () => {
        setShowModal(!showModal)
    }

    const handleLanguageSelect = (lang, flag, displayName) => {
        changeLanguage(lang)
        setSelectedFlag(flag)
        setShowModal(false)

        // Agar mobil menyu ochiq bo'lsa, uni yopish
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }

        // Tanlangan til nomini yangilash
        setSelectedLanguage(displayName)
    }

    // Til o'zgarganda flag va nomni yangilash
    useEffect(() => {
        switch (language) {
            case 'uz':
                setSelectedFlag(Uz)
                setSelectedLanguage(translations.language)
                break
            case 'ru':
                setSelectedFlag(Ru)
                setSelectedLanguage(translations.language)
                break
            case 'en':
                setSelectedFlag(En)
                setSelectedLanguage(translations.language)
                break
            default:
                setSelectedFlag(Uz)
                setSelectedLanguage(translations.language)
        }
    }, [language, translations])

    // Click outside to close modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setShowModal(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Mobile menu açıkken body scroll'ını engelle
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open')
        } else {
            document.body.classList.remove('menu-open')
        }

        return () => {
            document.body.classList.remove('menu-open')
        }
    }, [isMenuOpen])

    // Modal açıkken mobile menu kapansa modalı da kapat
    useEffect(() => {
        if (!isMenuOpen) {
            setShowModal(false)
        }
    }, [isMenuOpen])

    // Menyu elementlarini yopish uchun funksiya
    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
    }

    return (
        <nav>
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>

            <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <a href="/" onClick={handleLinkClick}>{translations.home}</a>
                <a href="#about" onClick={handleLinkClick}>{translations.about}</a>
                <a href="#maqsad" onClick={handleLinkClick}>{translations.goal}</a>
                <a href="#news" onClick={handleLinkClick}>{translations.news}</a>
                <a href="#video-lavhalar" onClick={handleLinkClick}>{translations.videos}</a>

                <div className='language' ref={languageRef}>
                    <button
                        className={`language-button ${showModal ? 'open' : ''}`}
                        onClick={toggleLanguageModal}
                    >
                        <img src={selectedFlag} alt={selectedLanguage} />
                        {selectedLanguage}
                    </button>

                    {showModal && (
                        <div className="language-modal">
                            <button
                                onClick={() => handleLanguageSelect('uz', Uz, translations.uzbek)}
                                className={language === 'uz' ? 'active' : ''}
                            >
                                <img src={Uz} alt="Uzbek" /> {translations.uzbek}
                            </button>
                            <button
                                onClick={() => handleLanguageSelect('ru', Ru, translations.russian)}
                                className={language === 'ru' ? 'active' : ''}
                            >
                                <img src={Ru} alt="Russian" /> {translations.russian}
                            </button>
                            <button
                                onClick={() => handleLanguageSelect('en', En, translations.english)}
                                className={language === 'en' ? 'active' : ''}
                            >
                                <img src={En} alt="English" /> {translations.english}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className='biz-bilan-boglanish'>
                <a href="#contact">{translations.contact}</a>
            </div>

            {/* Mobile Menu Button */}
            <div className='mobile-menu-btn' onClick={toggleMenu}>
                <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Nav