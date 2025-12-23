import React, { useState } from 'react'
import './maqsad.scss'

const Maqsad = () => {
    const maqsad = [
        {
            id: 1,
            img: 'https://uzbwomen.uz/wp-content/uploads/2025/01/IMG_20250116_100054_750.jpg',
            title: 'Ayollar va qizlarni himoya qilish',
            description: 'Huquqiy himoya xizmatlari orqali ayollar va qizlarning huquqlarini himoya qilish, ularning ijtimoiy xavfsizligini ta\'minlashga yordam beradi. Zo\'ravonlik va diskriminatsiyaga qarshi kurashish bo\'yicha yuridik yordam va maslahatlar beriladi.'
        },
        {
            id: 2,
            img: 'https://uzbwomen.uz/wp-content/uploads/2025/01/IMG_20250116_100054_750.jpg',
            title: 'Kasbiy va iqtisodiy rivojlanish',
            description: 'Ayollarning kasbiy ko\'nikmalarini oshirish, ish o\'rinlari yaratish va tadbirkorlikni rivojlantirishga qaratilgan treninglar, seminarlar va loyihalar.'
        },
        {
            id: 3,
            img: 'https://uzbwomen.uz/wp-content/uploads/2025/01/IMG_20250116_100054_750.jpg',
            title: 'Ta\'lim va ma\'rifat',
            description: 'Barcha yoshdagi ayol va qizlar uchun ta\'lim olish imkoniyatlarini kengaytirish, savodxonlik darajasini oshirish va zamonaviy bilimlar bilan ta\'minlash.'
        },
        {
            id: 4,
            img: 'https://uzbwomen.uz/wp-content/uploads/2025/01/IMG_20250116_100054_750.jpg',
            title: 'Sog\'liqni saqlash va farovonlik',
            description: 'Reproduktiv salomatlik, ruhiy va jismoniy sog\'liqni himoya qilish, profilaktika dasturlari va sog\'liqni saqlash xizmatlariga kirishni osonlashtirish.'
        },
        {
            id: 5,
            img: 'https://uzbwomen.uz/wp-content/uploads/2025/01/IMG_20250116_100054_750.jpg',
            title: 'Ijtimoiy faollik',
            description: 'Qaror qabul qilish jarayonlarida ayollar ishtirokini kuchaytirish, jamoat boshqaruvi va siyosiy faollikni oshirish.'
        },
        {
            id: 6,
            img: 'https://uzbwomen.uz/wp-content/uploads/2025/01/IMG_20250116_100054_750.jpg',
            title: 'Madaniyat va an\'analar',
            description: 'Milliy madaniyat va an\'analarni saqlab, ayollarning ijodiy salohiyatini rivojlantirish, san\'at va madaniy faoliyatni qo\'llab-quvvatlash.'
        }
    ]

    const [expandedCard, setExpandedCard] = useState(null)

    const handleCardClick = (id) => {
        setExpandedCard(expandedCard === id ? null : id)
    }

    return (
        <div className='maqsad' id="maqsad">
            <div className="container">
                <h1 className='section-title'>Bizning maqsadimiz</h1>
                <p className='section-subtitle'>Uyushmaning asosiy yo'nalishlari va faoliyat sohalari</p>

                <div className='maqsad-container'>
                    {maqsad.map((item) => (
                        <div 
                            className={`card ${expandedCard === item.id ? 'expanded' : ''}`} 
                            key={item.id}
                            onClick={() => handleCardClick(item.id)}
                        >
                            <div className="card-image-container">
                                <img 
                                    src={item.img} 
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <div className="card-overlay">
                                    <span className="card-number">0{item.id}</span>
                                </div>
                            </div>
                            
                            <div className='card-content'>
                                <h3 className="card-title">{item.title}</h3>
                                <p className={`card-description ${expandedCard === item.id ? 'expanded' : ''}`}>
                                    {item.description}
                                </p>
                                <button className="card-toggle-btn">
                                    {expandedCard === item.id ? 'Yopish' : 'Batafsil'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Maqsad