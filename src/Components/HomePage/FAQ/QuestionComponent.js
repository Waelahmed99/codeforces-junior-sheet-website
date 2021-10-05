import React from 'react'
import { Animated } from "react-animated-css";

function QuestionComponent(props) {
    return (
        <div key={props.id}>
            <p 
                className="question"
                onClick={() => props.onClick(props.idx)}> 
                {props.question} 
            </p>
            
            {props.isVisible && 
            <Animated 
                animationIn="fadeIn" 
                animationOut="fadeOut" 
                isVisible={props.isVisible}>
                <p className="answer"> {props.answer} </p>
            </Animated>}
        </div>
    )
}   

export default QuestionComponent