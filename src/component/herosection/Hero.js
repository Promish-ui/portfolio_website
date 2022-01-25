import React from 'react'
import heroimg from './heroimg.jpg';
import './hero.css';

export default function Hero() {
    return (
        <>
         <div className="heroimage">
             <img src={heroimg} alt="hero image" />
         </div>

        </>
    )
}
