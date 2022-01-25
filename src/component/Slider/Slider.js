
import React, { useState, useRef, useEffect } from 'react';
import { Slidedata } from './Slidedata';
import './slider.css'

export default function Slider() {


    const [current, setCurrent] = useState(0)
    const length = Slidedata.length
    const timeout = useRef(null)


    //for time picture change
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current == length - 1 ? 0 : current + 1)
        }
        timeout.current = setTimeout(nextSlide, 5000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }

    }, [current, length])



    //for slider buttons to work

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)

        // console.log(current)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

        //  console.log(current)
    };

    if (!Array.isArray(Slidedata) || Slidedata.length <= 0) {
        return null
    }









    return (
        <>
            <div className='herosection'>
                <div className='herowrapper'>
                {Slidedata.map((Slidedata, index) => {
                        return (
                            <div className='heroslide' key={index}>

                            {index === current && (

                                
                                <div className='heroslider'>
                                <img className='heroimage' src={Slidedata.images} alt={Slidedata.alt} />
                                <div className='herocontent'>
                                    <h1>{Slidedata.title}</h1>
                                    <p>{Slidedata.price}</p>
                                </div>
                            </div>

                             )}

                            
                        </div>
                        )
                        
                        
                        })}
                         <div className="SliderButton">
                        <div className="icon_left" onClick={prevSlide}><i class="fas fa-chevron-left"></i></div>
                        <div className="icon_right" onClick={nextSlide}><i class="fas fa-chevron-right"></i></div>
                    </div>

                    
                </div>

            </div>
        </>
    )
}


