import React from 'react'
import './footer.css';

export default function Footer() {
    return (
        <>
         <div className="bigbox">
             <div className='topbox'>
                 <div className='topbox_logo'> Promish Khaniya </div>
                 <div className='topbox_icon'> 
                 <a href='https://www.facebook.com/legends.khaniya/'> <i class="fab fa-facebook"></i></a>
                 <i class="fab fa-instagram"></i>
                 <i class="fab fa-twitter"></i>
                 <i class="fab fa-youtube"></i>

                  </div>
             </div>
             <div className='line'></div>

             <div className='midboxfooter'>

             <div className='back_top'>
             <a href='#'><i class="fa-solid fa-house"></i></a>
              </div>
             
                 
                <div className='footer_line'>Living,Learning, & leveling up once at a time.</div>
               
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
                <div className='footbox_left'>Private Policy   Terms & Condition </div>

            
            </div>
            

         </div>
         

        </>
    )
}
