// src/contexts/LanguageContext.js
import React, { createContext, useState, useContext } from 'react'
import { uz, ru, en } from '../locales'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('uz')
    const [translations, setTranslations] = useState(uz)

    const changeLanguage = (lang) => {
        switch (lang) {
            case 'uz':
                setTranslations(uz)
                setLanguage('uz')
                break
            case 'ru':
                setTranslations(ru)
                setLanguage('ru')
                break
            case 'en':
                setTranslations(en)
                setLanguage('en')
                break
            default:
                setTranslations(uz)
                setLanguage('uz')
        }
        localStorage.setItem('language', lang)
    }

    // Sayt ochilganda saqlangan tilni o'qish
    React.useEffect(() => {
        const savedLang = localStorage.getItem('language') || 'uz'
        changeLanguage(savedLang)
    }, [])

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)