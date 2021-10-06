import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

function HandleButton() {
    return (
        <Link className="wrapper" to="/handle">
            <a href="/handle">
                <span>Get Started!</span>
            </a>
        </Link>
    )
}

export default HandleButton