import React from 'react'
import './service.css';

export default function Service() {
    return (
        <>
            <div className='servicecontainer'>
            <div className='servicedetailcontainer'>
            <i class="fas slogo  fa-edit"></i>
            <h3>Designer</h3>
            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <p className='colortext'>Things I enjoy designing:</p>
            <p>UX, UI, Web, Mobile, Apps, Logos</p>
            <p className='colortext'>Design Tools:</p>
            <ul className='toollist'>
                <li>Figma</li>
                <li>Illustrator</li>
                <li>Adobe xD</li>
                <li>Adobe photoshop</li>
            </ul>
            </div>
            <div className='verticleline'></div>
            <div className='servicedetailcontainer'>
            <i class="fas slogo fa-code"></i>
            <h3>Front-End Developer</h3>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <p className='colortext'>Languages I code:</p>
            <p>HTML, Pug, Slim, CSS, Sass, Less</p>
            <p className='colortext'>Dev Tools:</p>
            <ul className='toollist'>
                <li>Vs code</li>
                <li>Git hub</li>
                <li>Bootstrap</li>
                <li>React </li>
            </ul>

           
            </div>
           
            </div>
            
        </>
    )
}
