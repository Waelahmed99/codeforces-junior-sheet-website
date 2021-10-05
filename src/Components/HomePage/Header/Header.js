import React from 'react'
import logo from '../../../logo.svg'
import './styles.css'

function Header() {
    return (
    <header>
        <nav>
            <div className="logo" >
                <img src={logo} height='60px' alt="logo"/>
            </div>

            <div className="test">
                <a className="btn secondary-btn" target="_blank" rel="noopener noreferrer"
                    href="https://www.facebook.com/ICPCSCU"> 
                    ICPC SCU Community </a>
                <a className="btn contribute-btn" target="_blank" rel="noopener noreferrer"
                    href="https://github.com/Waelahmed99/mostafa-saad-junior-sheet-website"> 
                    Contribute 
                </a>
            </div>

        </nav>

        <h1 className="title"> Mostafa Saad smart sheet </h1>
        <h2 className="subtitle"> Solve your sheet faster. You solve, we judge </h2>
        <img className="descriptive-img" src={logo} alt="main"/>
    </header>
    )
}

export default Header