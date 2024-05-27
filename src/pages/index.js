import React from 'react';
import BackgroundImgHighline from '@site/static/img/highline-night.jpg';
import BackgroundImgLondon from '@site/static/img/london-bridge.jpg';
import LogoImg from '@site/static/img/stone-tn-dog.png';

export default function Hello() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let night = currentHour < 6 || currentHour > 20;
    let image = night ? BackgroundImgHighline : BackgroundImgLondon;
    return (
            <div
                style={{
                    position: 'relative',
                    height: '100vh',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
            </div>
    );
}