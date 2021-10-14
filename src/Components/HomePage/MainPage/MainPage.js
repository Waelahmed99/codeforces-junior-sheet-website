import React from "react";
import './styles.css'
import FeedPage from '../../FeedPage/FeedPage';
import img from './problem-solving.png'

function MainPage({ sheets }) {
    return (
        <div className="body-wrapper">
            <div className="body-container">
                <h1 className="title">Problem solving smart sheet</h1>
                <p className="description">Solve your sheets faster. You solve, we judge!</p>

                <div className="body-image">
                    <img src={img} alt="img" />
                </div>

                <div className="sheets-container">
                    <FeedPage sheets={sheets} />
                </div>
            </div>
        </div>
    )
}

export default MainPage