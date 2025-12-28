import React, { useState } from 'react'
import './maqsad.scss'
import Img1 from '../../imgs/img_1.jpg'
import Img2 from '../../imgs/img_2.jpg'
import Img3 from '../../imgs/img_3.jpg'
import Img4 from '../../imgs/img_4.jpg'
import Img5 from '../../imgs/img_5.jpg'
import Img6 from '../../imgs/img_6.jpg'
import { useLanguage } from '../../context/LanguageContext'

const Maqsad = () => {
    const { translations, language } = useLanguage()
    
    // Tilga qarab maqsadlar massivini yaratamiz
    const getMaqsadData = () => {
        switch(language) {
            case 'ru':
                return [
                    {
                        id: 1,
                        img: Img1,
                        title: 'Защита женщин и девушек',
                        description: 'Защита прав женщин и девушек через юридические услуги, обеспечение их социальной безопасности. Предоставление юридической помощи и консультаций по борьбе с насилием и дискриминацией.'
                    },
                    {
                        id: 2,
                        img: Img2,
                        title: 'Поддержка женщин-предпринимателей',
                        description: 'Ассоциация организует различные программы, направленные на поддержку предпринимательской деятельности женщин и девушек. Эти программы включают разработку бизнес-планов, маркетинг и финансовое управление. Также ассоциация проводит различные мероприятия и тренинги в сотрудничестве с женщинами для укрепления их финансовой независимости.'
                    },
                    {
                        id: 3,
                        img: Img3,
                        title: 'Предоставление консультаций',
                        description: 'Ассоциация предоставляет женщинам и девушкам бесплатные консультации в различных областях, включая юридические, медицинские, психологические и бизнес-вопросы. Через консультационные центры помогает решать различные проблемы профессиональным подходом.'
                    },
                    {
                        id: 4,
                        img: 'https://uzbwomen.uz/wp-content/uploads/2025/01/IMG_20250116_100054_750.jpg',
                        title: 'Повышение юридической и медицинской грамотности',
                        description: 'Ассоциация организует различные семинары, тренинги и учебные программы по повышению юридической и медицинской грамотности. Женщины и девушки имеют возможность повысить свои знания в вопросах своих прав, основных аспектах охраны здоровья, в частности, репродуктивного здоровья, психологической помощи.'
                    },
                    {
                        id: 5,
                        img: Img5,
                        title: 'Помощь в установлении международных связей',
                        description: 'Ассоциация способствует расширению возможностей для обмена международным опытом женщин и девушек. Устанавливает сотрудничество с различными международными организациями и фондами, помогает обеспечить участие женщин в глобальных проектах.'
                    },
                    {
                        id: 6,
                        img: Img6,
                        title: 'Помощь в развитии бизнеса',
                        description: 'Ассоциация организует программы по развитию финансовых и стратегических навыков для женщин. Они предоставляют гранты, финансовую помощь и необходимые инструменты для развития предпринимательства для расширения их бизнеса.'
                    }
                ]
            case 'en':
                return [
                    {
                        id: 1,
                        img: Img1,
                        title: 'Protection of Women and Girls',
                        description: 'Protecting the rights of women and girls through legal services, ensuring their social security. Providing legal assistance and consultations on combating violence and discrimination.'
                    },
                    {
                        id: 2,
                        img: Img2,
                        title: 'Support for Women Entrepreneurs',
                        description: 'The association organizes various programs aimed at supporting the entrepreneurial activities of women and girls. These programs include business plan development, marketing, and financial management. The association also conducts various events and trainings in cooperation with women to strengthen their financial independence.'
                    },
                    {
                        id: 3,
                        img: Img3,
                        title: 'Providing Consultations',
                        description: 'The association provides free consultations to women and girls in various fields, including legal, medical, psychological, and business matters. Through consultation centers, it helps solve various problems with a professional approach.'
                    },
                    {
                        id: 4,
                        img: 'https://uzbwomen.uz/wp-content/uploads/2025/01/IMG_20250116_100054_750.jpg',
                        title: 'Improving Legal and Medical Literacy',
                        description: 'The association organizes various seminars, trainings, and educational programs to improve legal and medical literacy. Women and girls have the opportunity to enhance their knowledge on their rights, basic aspects of healthcare, particularly reproductive health, and psychological assistance.'
                    },
                    {
                        id: 5,
                        img: Img5,
                        title: 'Assistance in Establishing International Relations',
                        description: 'The association helps expand opportunities for women and girls to exchange international experience. It establishes cooperation with various international organizations and funds, helping to ensure women\'s participation in global projects.'
                    },
                    {
                        id: 6,
                        img: Img6,
                        title: 'Assistance in Business Development',
                        description: 'The association organizes programs for developing financial and strategic skills for women. They provide grants, financial assistance, and necessary tools for entrepreneurship development to expand their businesses.'
                    }
                ]
            default: // uz
                return [
                    {
                        id: 1,
                        img: Img1,
                        title: 'Ayollar va qizlarni himoya qilish',
                        description: 'Huquqiy himoya xizmatlari orqali ayollar va qizlarning huquqlarini himoya qilish, ularning ijtimoiy xavfsizligini ta\'minlashga yordam beradi. Zo\'ravonlik va diskriminatsiyaga qarshi kurashish bo\'yicha yuridik yordam va maslahatlar beriladi.'
                    },
                    {
                        id: 2,
                        img: Img2,
                        title: 'Ishbilarmon ayollar va qizlarga ko‘mak berish',
                        description: 'Uyushma ayollar va qizlarning tadbirkorlik faoliyatlarini qo‘llab-quvvatlashga qaratilgan turli dasturlarni tashkil qiladi. Bu dasturlar biznes-rejalar tayyorlash, marketing va moliyaviy boshqaruv kabi sohalarni o‘z ichiga oladi. Shuningdek, uyushma ayollarning moliyaviy mustaqilligini mustahkamlash uchun ular bilan hamkorlikda turli tadbirlar va treninglar o‘tkazadi.'
                    },
                    {
                        id: 3,
                        img: Img3,
                        title: 'Maslahatlar berish',
                        description: 'Uyushma ayollar va qizlarga turli sohalarda, jumladan huquqiy, tibbiy, psixologik va biznes masalalarida bepul maslahatlar taqdim etadi. Maslahat markazlari orqali professional yondashuv bilan turli muammolarni hal qilishga ko‘maklashadi.'
                    },
                    {
                        id: 4,
                        img: 'https://uzbwomen.uz/wp-content/uploads/2025/01/IMG_20250116_100054_750.jpg',
                        title: 'Huquqiy va tibbiy savodxonlikni oshirish',
                        description: 'Uyushma huquqiy va tibbiy savodxonlikni oshirish bo‘yicha turli seminarlar, treninglar va o‘quv dasturlarini tashkil qiladi. Ayollar va qizlar o‘z huquqlari, sog‘liqni saqlashning asosiy jihatlari, xususan, reproduktiv salomatlik, psixologik yordam kabi masalalarda bilimlarini oshirish imkoniyatiga ega bo‘lishadi.'
                    },
                    {
                        id: 5,
                        img: Img5,
                        title: "Xalqaro aloqalarni o'rnatishda yordam berish",
                        description: "Uyushma ayollar va qizlarning xalqaro darajadagi tajriba almashish imkoniyatlarini kengaytirishga ko'mak beradi. Turli xalqaro tashkilotlar va fondlar bilan hamkorlik o'rnatib, ayollarning global loyihalarda ishtirokini ta\'minlashga yordam beradi."
                    },
                    {
                        id: 6,
                        img: Img6,
                        title: "Biznesni rivojlantirishga ko'mak berish",
                        description: "Uyushma ayollar uchun moliyaviy va strategik ko'nikmalarni rivojlantirish bo'yicha dasturlarni tashkil etadi. Ular bizneslarini kengaytirishlari uchun grantlar, moliyaviy yordam va tadbirkorlikni rivojlantirish uchun kerakli vositalar bilan ta'minlaydi."
                    }
                ]
        }
    }

    const maqsad = getMaqsadData()
    const [expandedCard, setExpandedCard] = useState(null)

    const handleCardClick = (id) => {
        setExpandedCard(expandedCard === id ? null : id)
    }

    return (
        <div className='maqsad' id="maqsad">
            <div className="container">
                <h1 className='section-title'>
                    {translations.ourGoals || "Bizning maqsadimiz"}
                </h1>
                <p className='section-subtitle'>
                    {translations.ourGoalsSubtitle || "Uyushmaning asosiy yo'nalishlari va faoliyat sohalari"}
                </p>

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
                                    {expandedCard === item.id ? 
                                        (language === 'ru' ? 'Закрыть' : 
                                         language === 'en' ? 'Close' : 'Yopish') 
                                        : 
                                        (language === 'ru' ? 'Подробнее' : 
                                         language === 'en' ? 'Details' : 'Batafsil')
                                    }
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