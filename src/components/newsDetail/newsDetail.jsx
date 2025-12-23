import './newsDetail.scss'
import { useNavigate, useParams } from 'react-router-dom'

const NewsDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const news = [
    {
      id: 1,
      img: 'https://uzbwomen.uz/wp-content/uploads/2025/12/photo_2025-12-07_20-49-45-9-300x200.jpg',
      title: 'Uyushmaning ko‘p yillik faoliyati e’tirof etildi.',
      text: 'Bu yerga yangilikning to‘liq matni yoziladi...'
    }
  ]

  const item = news.find(n => n.id === Number(id))

  if (!item) return <h2>Yangilik topilmadi</h2>

  return (
    <div className="news-detail">
      <div className="detail-wrapper">
        <div className="detail-img">
          <img src={item.img} alt="" />
        </div>

        <div className="detail-content">
          <span className="back-btn" onClick={() => navigate(-1)}>
             Orqaga
          </span>

          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
