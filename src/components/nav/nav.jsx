import React, { useState } from 'react'
import Logo from '../../imgs/logo.png'
import './nav.scss'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav>
            <div className='logo'>
                <img src={Logo} alt="Logo" />
            </div>
            
            <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <a href="/">Bosh sahifa</a>
                <a href="">Biz Haqimizda</a>
                <a href="">Bizning Maqsadimiz</a>
                <a href="">Video Lavhalar</a>
            </div>
            
            <div className='biz-bilan-boglanish'>
                <a href="">Biz Bilan Bog'lanish</a>
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