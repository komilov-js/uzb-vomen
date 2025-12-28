import React, { useState, useEffect } from 'react';
import './VideoLavhalar.scss';
import { useLanguage } from '../../context/LanguageContext';

const VideoLavhalar = () => {
  const { language, translations } = useLanguage();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Backendan videolarni olish
  useEffect(() => {
    fetchVideos();
  }, [language]);

  // API chaqiruvi
  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`http://127.0.0.1:8000/videolar/?format=json&lang=${language}`);
      
      if (!response.ok) {
        throw new Error(`HTTP xato! Status: ${response.status}`);
      }
      
      const data = await response.json();
      const videosData = data.results || data;
      
      setVideos(videosData);
      if (videosData.length > 0) {
        setSelectedVideo(videosData[0]);
      }
    } catch (error) {
      console.error('Videolarni yuklashda xatolik:', error);
      setError(error.message);
      // Demo ma'lumotlar
      setVideos(generateDemoVideos(language));
      setSelectedVideo(generateDemoVideos(language)[0]);
    } finally {
      setLoading(false);
    }
  };

  // Video tanlash funksiyasi
  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
    // Ko'rishlar sonini oshirish
    incrementViews(video.id);
  };

  // Ko'rishlar sonini oshirish
  const incrementViews = async (videoId) => {
    try {
      await fetch(`http://127.0.0.1:8000/videolar/${videoId}/increment_views/`, {
        method: 'POST',
      });
    } catch (error) {
      console.error('Ko\'rishlar sonini oshirishda xato:', error);
    }
  };

  // Layklar sonini oshirish
  const incrementLikes = async (videoId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/videolar/${videoId}/increment_likes/`, {
        method: 'POST',
      });
      if (response.ok) {
        const data = await response.json();
        // Yangilangan layklar soni bilan videoni yangilash
        setVideos(prevVideos => 
          prevVideos.map(video => 
            video.id === videoId 
              ? { ...video, likes_count: data.likes_count }
              : video
          )
        );
        if (selectedVideo?.id === videoId) {
          setSelectedVideo(prev => ({ ...prev, likes_count: data.likes_count }));
        }
      }
    } catch (error) {
      console.error('Layklar sonini oshirishda xato:', error);
    }
  };

  // Demo ma'lumotlar yaratish
  const generateDemoVideos = (lang) => {
    const videosData = {
      uz: [
        { 
          id: 1, 
          title: "Rözgöriga banka | 32 yıllık likuvchi tadbirkor aydı", 
          youtube_id: "Gx9omp9mUdI", 
          description: "32 yillik tajribaga ega tadbirkorning bank sohasidagi tajribalari",
          duration: "15:42",
          views_count: 12500,
          likes_count: 850,
          thumbnail: "https://img.youtube.com/vi/Gx9omp9mUdI/hqdefault.jpg"
        },
        { 
          id: 2, 
          title: "Ayollar tadbirkorligini rivojlantirish", 
          youtube_id: "dQw4w9WgXcQ", 
          description: "Ayollar tadbirkorligini rivojlantirish bo'yicha maslahatlar",
          duration: "22:18",
          views_count: 8900,
          likes_count: 720,
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        },
        { 
          id: 3, 
          title: "Ayollar tadbirkorligi so'rov natijalari", 
          youtube_id: "9bZkp7q19f0", 
          description: "Tadbirkorlik sohasida o'tkazilgan so'rov natijalari",
          duration: "18:35",
          views_count: 11200,
          likes_count: 920,
          thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg"
        },
        { 
          id: 4, 
          title: "Jamoatchilik kengashlari forumi", 
          youtube_id: "kJQP7kiw5Fk", 
          description: "Jamoatchilik kengashlari forumi haqida hisobot",
          duration: "45:22",
          views_count: 15600,
          likes_count: 1100,
          thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg"
        },
        { 
          id: 5, 
          title: "Kipr oroli tadbirkorlik imkoniyatlari", 
          youtube_id: "CevxZvSJLk8", 
          description: "Kipr oroliga sayohat va tadbirkorlik imkoniyatlari",
          duration: "32:10",
          views_count: 9800,
          likes_count: 650,
          thumbnail: "https://img.youtube.com/vi/CevxZvSJLk8/hqdefault.jpg"
        },
        { 
          id: 6, 
          title: "Konzun Kasana loyihasi", 
          youtube_id: "LXb3EKWsInQ", 
          description: "Konzun Kasana loyihasi haqida batafsil ma'lumot",
          duration: "28:45",
          views_count: 13400,
          likes_count: 890,
          thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/hqdefault.jpg"
        },
        { 
          id: 7, 
          title: "Bromo Kasana - yangi startap loyihasi", 
          youtube_id: "JGwWNGJdvx8", 
          description: "Bromo Kasana - yangi startap loyihasi",
          duration: "36:12",
          views_count: 15200,
          likes_count: 1250,
          thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg"
        },
      ],
      ru: [
        { 
          id: 1, 
          title: "Бизнес в банковской сфере | Опыт предпринимателя с 32-летним стажем", 
          youtube_id: "Gx9omp9mUdI", 
          description: "Опыт предпринимателя с 32-летним стажем в банковской сфере",
          duration: "15:42",
          views_count: 12500,
          likes_count: 850,
          thumbnail: "https://img.youtube.com/vi/Gx9omp9mUdI/hqdefault.jpg"
        },
        { 
          id: 2, 
          title: "Развитие женского предпринимательства", 
          youtube_id: "dQw4w9WgXcQ", 
          description: "Советы по развитию женского предпринимательства",
          duration: "22:18",
          views_count: 8900,
          likes_count: 720,
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        },
        // ... qolgan videolar rus tilida
      ],
      en: [
        { 
          id: 1, 
          title: "Business in Banking | 32 Years of Entrepreneur Experience", 
          youtube_id: "Gx9omp9mUdI", 
          description: "Experience of an entrepreneur with 32 years in banking sector",
          duration: "15:42",
          views_count: 12500,
          likes_count: 850,
          thumbnail: "https://img.youtube.com/vi/Gx9omp9mUdI/hqdefault.jpg"
        },
        { 
          id: 2, 
          title: "Development of Women's Entrepreneurship", 
          youtube_id: "dQw4w9WgXcQ", 
          description: "Advice on developing women's entrepreneurship",
          duration: "22:18",
          views_count: 8900,
          likes_count: 720,
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        },
        // ... qolgan videolar ingliz tilida
      ]
    };

    return videosData[lang] || videosData.uz;
  };

  // Tilga qarab matnlar
  const getTranslatedTexts = () => {
    const texts = {
      uz: {
        title: "Video Lavhalar",
        loading: "Video yuklanmoqda...",
        noVideo: "Video tanlang",
        playlist: "Playlist",
        watchOnYouTube: "YouTube'da ko'rish",
        views: "ko'rish",
        likes: "layk",
        duration: "davomiylik",
        selectVideo: "Video tanlash",
        allVideos: "Barcha videolar",
        videoCount: "ta video"
      },
      ru: {
        title: "Видео материалы",
        loading: "Видео загружается...",
        noVideo: "Выберите видео",
        playlist: "Плейлист",
        watchOnYouTube: "Смотреть на YouTube",
        views: "просмотров",
        likes: "лайков",
        duration: "продолжительность",
        selectVideo: "Выбрать видео",
        allVideos: "Все видео",
        videoCount: "видео"
      },
      en: {
        title: "Video Materials",
        loading: "Loading video...",
        noVideo: "Select a video",
        playlist: "Playlist",
        watchOnYouTube: "Watch on YouTube",
        views: "views",
        likes: "likes",
        duration: "duration",
        selectVideo: "Select video",
        allVideos: "All videos",
        videoCount: "videos"
      }
    };

    return texts[language] || texts.uz;
  };

  const t = getTranslatedTexts();

  if (loading) {
    return (
      <div className="video-loading" id="video-lavhalar">
        <div className="loading-spinner"></div>
        <p>{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="video-lavhalar-container" id='video-lavhalar'>
      <header className="video-header">
        <h1>{t.title}</h1>
        <div className="video-count">{videos.length} {t.videoCount}</div>
      </header>

      {error && (
        <div className="video-error">
          <p>{error}</p>
          <button onClick={fetchVideos}>Qayta yuklash</button>
        </div>
      )}

      <div className="video-content">
        {/* Videolar ro'yxati */}
        <div className="video-sidebar">
          <div className="playlist-header">
            <h2>{t.playlist}</h2>
            <div className="playlist-count">{videos.length} {t.videoCount}</div>
          </div>
          
          <ul className="video-list">
            {videos.map((video) => (
              <li 
                key={video.id} 
                className={`video-item ${selectedVideo?.id === video.id ? 'active' : ''}`}
                onClick={() => handleSelectVideo(video)}
              >
                <div className="video-item-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-item-duration">{video.duration}</div>
                </div>
                <div className="video-item-content">
                  <h3>{video.title}</h3>
                  <div className="video-item-meta">
                    <span className="views">
                      👁️ {video.views_count} {t.views}
                    </span>
                    <span className="likes">
                      ❤️ {video.likes_count} {t.likes}
                    </span>
                  </div>
                  {/* <p className="video-item-desc">{video.description}</p> */}
                </div>
              </li>
            ))}
          </ul>
          
          <div className="youtube-link">
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-btn"
            >
              {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.67 8.14C19.58 7.85 19.42 7.58 19.21 7.36C19 7.14 18.74 6.98 18.45 6.88C17.19 6.54 12 6.5 12 6.5C12 6.5 6.81 6.54 5.55 6.88C5.26 6.98 5 7.14 4.79 7.36C4.58 7.58 4.42 7.85 4.33 8.14C4 9.41 4 12 4 12C4 12 4 14.59 4.33 15.86C4.42 16.15 4.58 16.42 4.79 16.64C5 16.86 5.26 17.02 5.55 17.12C6.81 17.46 12 17.5 12 17.5C12 17.5 17.19 17.46 18.45 17.12C18.74 17.02 19 16.86 19.21 16.64C19.42 16.42 19.58 16.15 19.67 15.86C20 14.59 20 12 20 12C20 12 20 9.41 19.67 8.14Z" fill="currentColor"/>
                <path d="M10 15L15 12L10 9V15Z" fill="white"/>
              </svg> */}
              <span>{t.watchOnYouTube}</span>
            </a>
          </div>
        </div>

        {/* Tanlangan video */}
        <div className="video-main">
          {selectedVideo ? (
            <>
              <div className="video-player">
                <div className="video-iframe-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.youtube_id}?autoplay=1&rel=0&modestbranding=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="video-info">
                <h2>{selectedVideo.title}</h2>
                
                <div className="video-stats">
                  <span className="video-stat">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {selectedVideo.views_count} {t.views}
                  </span>
                  
                  <span className="video-stat">
                    <button 
                      className="like-btn"
                      onClick={() => incrementLikes(selectedVideo.id)}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                      {selectedVideo.likes_count} {t.likes}
                    </button>
                  </span>
                  
                  <span className="video-stat">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {selectedVideo.duration}
                  </span>
                  
                  <a 
                    href={selectedVideo.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-stat youtube-link-btn"
                  >
                    {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22.54 6.42C22.42 5.93 22.18 5.48 21.82 5.12C21.46 4.76 21.01 4.52 20.52 4.4C18.88 4 12 4 12 4C12 4 5.12 4 3.48 4.4C2.99 4.52 2.54 4.76 2.18 5.12C1.82 5.48 1.58 5.93 1.46 6.42C1 8.13 1 12 1 12C1 12 1 15.87 1.46 17.58C1.58 18.07 1.82 18.52 2.18 18.88C2.54 19.24 2.99 19.48 3.48 19.6C5.12 20 12 20 12 20C12 20 18.88 20 20.52 19.6C21.01 19.48 21.46 19.24 21.82 18.88C22.18 18.52 22.42 18.07 22.54 17.58C23 15.87 23 12 23 12C23 12 23 8.13 22.54 6.42Z" fill="currentColor"/>
                      <path d="M9.75 15.02L15.5 12L9.75 8.98V15.02Z" fill="white"/>
                    </svg> */}
                    {t.watchOnYouTube}
                  </a>
                </div>
                
                <p className="video-description">
                  {selectedVideo.description}
                </p>
              </div>
            </>
          ) : (
            <div className="no-video">
              <div className="no-video-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>{t.selectVideo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoLavhalar;