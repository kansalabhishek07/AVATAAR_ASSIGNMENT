import React from "react"
import "./styles.css"

export default function Navbar() {
    return (
        <nav className="nav">
            <h1 className="site-title">E-COMM</h1>
            <ul>
                    <h1>HOME</h1>
                    <h1>ELECTRONICS</h1>
                    <h1>BOOKS</h1>
                    <h1>MUSIC</h1>
                    <h1>MOVIES</h1>
                    <h1>CLOTHING</h1>
                    <h1>GAMES</h1>
                    <div class="dropdown">
                        <button class="dropbtn">MORE</button>
                        <div class="dropdown-content">
                            <h1>FURNITURE</h1>
                            <h1>ELECTRONICS</h1>
                            <h1>TRAVEL</h1>
                            <h1>BOTANICAL</h1>
                            <h1>CATEGORY NAME</h1>
                        </div>
                    </div>
                    
                    <div className="searchBar">
                        <input className="search" type="text" placeholder="SEARCH SOMETHING" />
                    </div>
            
            </ul>
            
        </nav>
        )
    
}