import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

function HandleModal({ match }) {
    let [handle, setHandle] = useState('')
    const history = useHistory()

    const sheetName = match.params.name

    function returnHome() {
        history.push('/')
    }

    function goToSheet() {
        history.replace(`/${handle}/${sheetName}`)
    }

    return (
        <div className="modalBackground modal"
        onKeyDown={(event) => {
            if (event.key === 'Escape') returnHome()
            else if (event.key === 'Enter') goToSheet()
        }}>
            <div className="modalContainer">


                <div className="title">
                    <h1>Please pass on your codeforces handle</h1>
                </div>

                <div className="body">
                    <input
                        autoFocus
                        type="text"
                        placeholder="Handle"
                        value={handle}
                        onChange={(event) => setHandle(event.target.value)} />
                </div>

                <div className="footer">
                    <button id="cancelBtn" onClick={returnHome}>
                        Cancel
                    </button>


                    <button onClick={goToSheet}>Continue</button>

                </div>

            </div>
        </div >
    )
}

export default HandleModal