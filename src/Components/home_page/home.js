import React, { useState } from 'react'
import './home.css'
import Questions from './Questions'
import { Animated } from "react-animated-css";

function HomePage() {
    let [ faqState, setFaq ] = useState({})

    function onClick(idx) {
        setFaq((oldState) => {
            let newState = {...oldState}
            newState[idx] = !newState[idx]
            return newState
        })
    }

    let faqComponenets = Questions.map((obj, idx) => {
        return (
            <div key={obj.id}>
                <p onClick={() => onClick(idx)} className="question"> {obj.question} </p>
                {faqState[idx] && <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={faqState[idx]}>
                    <p className="answer"> {obj.answer} </p>
                </Animated>}
            </div>
        )
    })

    return (
        <div>
            <div className="description">
                <p> Hi there! Let's get to know this website more</p>
                <p>
                    This website is based on junior's Mostafa Saad's sheet for problem solving
                    Instead of using a static Google Sheet for recording your submissions
                    here you can focus on solving, and we will do the rest for you!
                </p>
            </div>

            <div className="faq">
                <h1> Frequently Asked Questions (FAQ) </h1>

                {faqComponenets}
            </div>
        </div>
    )
}

export default HomePage