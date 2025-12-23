import React from 'react'
import './homeComponent.scss'

const HomeComponent = () => {
    return (
        <div className='home-components'>
            <div className='home-component'>
                <div className='home-text'>
                    <p>Ayollarning ijtimoiy va iqtisodiy taraqqiyotiga yo'naltirilgan kuch</p>
                </div>
                <div className='home-iframe'>
                    <iframe 
                        src="https://www.youtube.com/embed/Gx9omp9mUdI?si=7_dEg-ehHB-sTVGx" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent