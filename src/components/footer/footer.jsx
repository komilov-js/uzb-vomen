import React from 'react'
import './footer.scss'
import Logo from '../../imgs/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className='logo-tex'>
                <img src={Logo} alt="" />
                <p>"O‘zbekiston Ayollar va Qizlar Uyushmasi ayollarning huquqlarini himoya qilish, ularni qo‘llab-quvvatlash va rivojlantirishga qaratilgan faoliyat olib boradi. Biz ayollar va qizlarning ijtimoiy, iqtisodiy va huquqiy bilimlarini oshirish orqali ularning kelajakdagi muvaffaqiyatiga hissa qo‘shamiz."</p>
            </div>
        </footer>
    )
}

export default Footer