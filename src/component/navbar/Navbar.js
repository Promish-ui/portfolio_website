import React from 'react'
import './navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                
                <div className="logo">Promish</div>


                <ul className="nav_menu">

                    <li className="nav_items">Home</li>
                    <li className="nav_items">Recent works</li>
                    <li className="nav_items">About Me</li>
                    <li className="nav_items">Contact</li>
                   

                 </ul>
                 <div><i class="fa-solid fa-bars"></i></div>


               

            </div>
        </>
    )
}
