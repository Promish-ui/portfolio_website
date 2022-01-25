import React from 'react'
import './footer.css';

export default function Footer() {
    return (
        <>
         <div className="bigbox">
             <div className='topbox'>
                 <div className='topbox_logo'>Promish</div>
                 <div className='topbox_icon'> 

                <a href='https://www.facebook.com/legends.khaniya/'> <i class="fab fa-facebook"></i></a>
                 <i class="fab fa-instagram"></i>
                 <i class="fab fa-twitter"></i>
                 <i class="fab fa-youtube"></i>

                  </div>
             </div>
             <div className='line'></div>

             <div className='midbox'>
                <div className='company'>
                    <p className='bold'>Company</p>
                    <div className='line'></div>
                    <p>company1</p>
                    <p>company2</p>
                    <p>company3</p>
                    <p>company4</p>

                </div>
                <div className='Service'>
                <p className='bold'>Service</p>
                    <div className='line'></div>
                    <p>company1</p>
                    <p>company2</p>
                    <p>company3</p>
                    <p>company4</p>
                </div>
                <div className='Account'>
                <p className='bold'>Account</p>
                    <div className='line'></div>
                    <p>company1</p>
                    <p>company2</p>
                    <p>company3</p>
                    <p>company4</p>
                </div>
                <div className='Courses'>
                <p className='bold'>Courses</p>
                    <div className='line'></div>
                    <p>company1</p>
                    <p>company2</p>
                    <p>company3</p>
                    <p>company4</p>
                </div>
                <div className='Suscribe'>
                <p className='bold'>Suscribe</p>
                <div className='line'></div>
                <input className='inputformat' type="text"   placeholder="Enter you email." />
                <br></br>
                <input  className='suscribebtn' type="submit" value="Suscribe" />

                </div>


             </div>
            <div className='footbox'>
                <div className='footbox_left'>copyright @ 2020 All right reserved PK2020</div>
                <div className='footbox_left'>Private Ploicy   Terms & Condition </div>

            
            </div>

         </div>
        </>
    )
}
