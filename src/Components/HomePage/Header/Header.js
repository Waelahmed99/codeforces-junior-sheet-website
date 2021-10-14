import React from 'react'
import logo from './logo.png'
import './styles.css'

function Header() {
    return (
    <header>
        <nav>
            <div className="logo" >
                <img src={logo} height='60px' alt="logo"/>
            </div>

            <a className="btn secondary-btn" target="_blank" rel="noopener noreferrer"
                href="https://www.facebook.com/ICPCSCU"> 
                ICPC SCU Community </a>
            
            <a className="btn contribute-btn" target="_blank" rel="noopener noreferrer"
                href="https://github.com/Waelahmed99/mostafa-saad-junior-sheet-website"> 
                Contribute 
            </a>

        </nav>
    </header>
    )
}

export default Header