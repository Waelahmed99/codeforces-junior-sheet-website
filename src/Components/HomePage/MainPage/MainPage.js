import React from 'react'
import './styles.css'
import HandleButton from '../HandleButton';
import img from './problem-solving.png'

function MainPage() {
    return (
        <div className="body-wrapper">
            <div className="body-container">
                <h1 className="title">Problem solving smart sheet</h1>
                <p className="description">Solve your sheets faster. You solve, we judge!</p>

                <HandleButton />

                <div className="body-image"> 
                    <img src={img} alt="problem-solving" />
                </div>
            </div>
        </div>
    )
}

export default MainPage