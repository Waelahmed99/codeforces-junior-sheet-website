import React from 'react'
import './styles.css'
import FAQ from '../FAQ';

function MainPage() {
    return (
        <div>
            <div className="description">
                <p> Hi there! Let's get to know this website more</p>
                <p>
                    {`This website is based on junior's Mostafa Saad's sheet for problem solving
                    Instead of using a static Google Sheet for recording your submissions
                    here you can focus on solving, and we will do the rest for you!`}
                </p>
            </div>

            <FAQ />
        </div>
    )
}

export default MainPage