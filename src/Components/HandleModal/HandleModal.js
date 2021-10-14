import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

function HandleModal({ match }) {
    let [handle, setHandle] = useState('')
    const history = useHistory()

    const sheetName = match.params.name

    const returnHome = () => history.push('/')
    const goToSheet = () => history.replace(`/${handle}/${sheetName}`)
    const keyboardPress = (event) => {
        if (event.key === 'Escape') returnHome()
        else if (event.key === 'Enter') goToSheet()
    }

    return (
        <div className="modalBackground modal"
            onKeyDown={keyboardPress}>
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