import React, { useState } from 'react'
import './styles.css'
import Questions from './Questions'
import QuestionComponent from './QuestionComponent';

function FAQ() {
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
            <QuestionComponent 
                key={obj.id}
                {...obj} 
                idx
                isVisible={faqState[idx]} 
                onClick={() => onClick(idx)}
            />
        )
    })

    return (
        <div className="faq">
            <h1> Frequently Asked Questions (FAQ) </h1>

            {faqComponenets}
        </div>
    )
}

export default FAQ