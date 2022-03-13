import React from 'react'
import './Work.css'

import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.jpg';



export default function Work() {
    return (
        <>
            <div className='workcontainer'>
                <h3 >My Recent work</h3>
                <p className='worktext'>Here are a few design projects I've worked on recently. Want to see more? Email me.</p>
                <div className='workdatacontainer'>
                    <div className='workrow'>
                        <div className='workdata'>
                            <img src={img4} alt='promish' />
                        </div>
                        <div className='workdata'>
                            <img src={img5} alt='promish' />
                        </div>
                    </div>
                    <div className='workrow'>
                    <div className='workdata'>
                            <img src={img4} alt='promish' />
                        </div>
                        <div className='workdata'>
                            <img src={img5} alt='promish' />
                        </div>
                        
                    </div>
                </div>
               <a href='https://dribbble.com/pkhaniya'> <button className='workbtn'>See me on dribble</button></a>
               <div className='hiresection'>
                   <h3 >Interested in collaborating or investing?</h3>
                   <p className='worktext'>I’m always open to discussing product design work or partnership opportunities.</p>
                   <button className='hirebtn workbtn'>Start a conversation</button>
               </div>
            </div>
        </>
    )
}
