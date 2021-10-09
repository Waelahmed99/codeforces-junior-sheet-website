import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
import image from './error-404.png'

function NoHandle() {
    return (
        <div className="container">
            <div className="body">
                <img className="error-image" alt="404" src={image}/>
                <h4 className="title">Oops, you just entered a wrong handle!</h4>
                <p className="content">
                    Please make sure you entered the exact handle at&nbsp;
                    <a target="_blank" href="https://www.codeforces.com" rel="noopener noreferrer">Codeforces</a>
                </p>
                <Link to="/">
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default NoHandle