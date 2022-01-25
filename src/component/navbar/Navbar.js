import React from 'react'
import './navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                
                <div className="logo">Promish</div>


                <ul className="nav_menu">

                    <li className="nav_items">Home</li>
                    <li className="nav_items">Products</li>
                    <li className="nav_items">About Me</li>
                    <li className="nav_items">Contact</li>
                    <li className="nav_items">Contact1</li>

                 </ul>


                <div className="nav_icons">
                    <i class="fas fa-search-location" ></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-shopping-bag"></i>
                    

                    </div>

            </div>
        </>
    )
}
