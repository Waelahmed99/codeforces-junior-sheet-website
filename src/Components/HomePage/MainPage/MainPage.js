import React from 'react'
import './styles.css'
// import FAQ from '../FAQ';
import HandleButton from '../HandleButton';
// import cover from './cover.jpg'

function MainPage() {
    return (
        <div className="body-container">
            <div className="sides border">
                <h1 className="title">Problem solving smart sheet</h1>
                <p className="description">Solve your sheets faster. You solve, we judge!</p>

                <HandleButton />
            </div>
        </div>
    )
}

export default MainPage