import React, { useState } from 'react'
import HandleModal from '../HandleModal'
import './styles.css'

function HandleButton() {
    let [ showModal, setVisibility ] = useState(false)

    return (
        <div>
            <div className="wrapper" onClick={() => setVisibility(!showModal)}>
                <div>
                    <span className="button">Get Started!</span>
                </div>
            </div>

            { showModal && <HandleModal closeModal={setVisibility}/>}
        </div>
    )
}

export default HandleButton