import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function HandleModal({ closeModal }) {
    let [handle, setHandle] = useState('')

    return (
        <div className="modalBackground modal">
            <div className="modalContainer">

                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>
                        X
                    </button>
                </div>

                <div className="title">
                    <h1>Please pass on your codeforces handle</h1>
                </div>

                <div className="body">
                    <input
                        type="text"
                        placeholder="Handle"
                        value={handle}
                        onChange={(event) => setHandle(event.target.value)} />
                </div>

                <div className="footer">
                    <button onClick={() => closeModal(false)} id="cancelBtn">
                        Cancel
                    </button>

                    <Link to={`/${handle}`}>
                        <button>Continue</button>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default HandleModal