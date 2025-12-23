import React, { useState, useEffect } from 'react';
import './VideoLavhalar.scss';

const VideoLavhalar = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Backendan videolarni olish
  useEffect(() => {
    fetchVideos();
  }, []);

  // API chaqiruvi (o'zingizning backend manzilingizni qo'ying)
  const fetchVideos = async () => {
    try {
      setLoading(true);
      // Bu yerda haqiqiy API endpoint'ingizni ishlatishingiz kerak
      const response = await fetch('https://api.example.com/videos');
      const data = await response.json();
      setVideos(data);
      if (data.length > 0) {
        setSelectedVideo(data[0]);
      }
    } catch (error) {
      console.error('Videolarni yuklashda xatolik:', error);
      // Demo ma'lumotlar agar API ishlamasa
      setVideos(demoVideos);
      setSelectedVideo(demoVideos[0]);
    } finally {
      setLoading(false);
    }
  };

  // Video tanlash funksiyasi
  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  // Demo ma'lumotlar
  const demoVideos = [
    { id: 1, title: "Rözgöriga banka | 32 yıllık likuvchi tadbirkor aydı", youtubeId: "demo1", description: "32 yillik tajribaga ega tadbirkorning bank sohasidagi tajribalari" },
    { id: 2, title: "Aydlar tadbirkorligini rivajlantirish", youtubeId: "demo2", description: "Aydlar tadbirkorligini rivojlantirish bo'yicha maslahatlar" },
    { id: 3, title: "Aydlar tadbirkorligi edilab survealandı", youtubeId: "demo3", description: "Tadbirkorlik sohasida o'tkazilgan so'rov natijalari" },
    { id: 4, title: "Jamontchlik kengsahlari forumi", youtubeId: "demo4", description: "Jamoatchilik kengashlari forumi haqida hisobot" },
    { id: 5, title: "Kipr", youtubeId: "demo5", description: "Kipr oroliga sayohat va tadbirkorlik imkoniyatlari" },
    { id: 6, title: "Konzun Kasana uz", youtubeId: "demo6", description: "Konzun Kasana loyihasi haqida batafsil ma'lumot" },
    { id: 7, title: "Bromo Kasana uz", youtubeId: "demo7", description: "Bromo Kasana - yangi startap loyihasi" },
  ];

  if (loading) {
    return <div className="loading">Videolar yuklanmoqda...</div>;
  }

  return (
    <div className="video-lavhalar-container">
      <header className="video-header">
        <h1>Video Lavhalar</h1>
        <div className="video-count">{videos.length} Video</div>
      </header>

      <div className="video-content">
        {/* Videolar ro'yxati */}
        <div className="video-sidebar">
          <div className="playlist-header">
            <h2>Playlist</h2>
          </div>
          
          <ul className="video-list">
            {videos.map((video) => (
              <li 
                key={video.id} 
                className={`video-item ${selectedVideo?.id === video.id ? 'active' : ''}`}
                onClick={() => handleSelectVideo(video)}
              >
                <div className="video-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 16.5L16 12L10 7.5V16.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="video-item-content">
                  <h3>{video.title}</h3>
                  <p className="video-item-desc">{video.description}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="youtube-link">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.67 8.14C19.58 7.85 19.42 7.58 19.21 7.36C19 7.14 18.74 6.98 18.45 6.88C17.19 6.54 12 6.5 12 6.5C12 6.5 6.81 6.54 5.55 6.88C5.26 6.98 5 7.14 4.79 7.36C4.58 7.58 4.42 7.85 4.33 8.14C4 9.41 4 12 4 12C4 12 4 14.59 4.33 15.86C4.42 16.15 4.58 16.42 4.79 16.64C5 16.86 5.26 17.02 5.55 17.12C6.81 17.46 12 17.5 12 17.5C12 17.5 17.19 17.46 18.45 17.12C18.74 17.02 19 16.86 19.21 16.64C19.42 16.42 19.58 16.15 19.67 15.86C20 14.59 20 12 20 12C20 12 20 9.41 19.67 8.14Z" fill="currentColor"/>
                <path d="M10 15L15 12L10 9V15Z" fill="white"/>
              </svg>
              <span>YouTube'da ko'rish</span>
            </a>
          </div>
        </div>

        {/* Tanlangan video */}
        <div className="video-main">
          {selectedVideo ? (
            <>
              <div className="video-player">
                <div className="video-iframe-container">
                  {/* Haqiqiy loyihada YouTube ID ni ishlatishingiz kerak */}
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="video-info">
                <h2>{selectedVideo.title}</h2>
                <p className="video-description">
                  {selectedVideo.description}
                </p>
              </div>
            </>
          ) : (
            <div className="no-video">Video tanlang</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoLavhalar;