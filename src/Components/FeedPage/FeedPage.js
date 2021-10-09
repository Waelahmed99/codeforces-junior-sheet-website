import React, { useState, useEffect } from "react";
import './styles.css'
import { useLocation, useHistory } from 'react-router-dom'
import getSheets from "../../Services/GetSheets";

function SheetsPage({ match }) {
    const [sheets, setSheets] = useState([])
    const history = useHistory()
    const state = useLocation().state
    const handle = match.params.handle

    /* 
        If user accessed `/:handle/feed` directly
        Go back to `/:handle` page to extract data.
    */
    let submissions
    try {
        submissions = state.submissions
    } catch {
        history.push(`/${handle}`)
    }

    /*
        Request sheets API call 
           When page loads
    */
    useEffect(() => {
        async function apiCall() {
            const t = await getSheets()
            setSheets(t)
        }
        apiCall()
    }, [])

    return (
        <div className="feed-container">
            <div className="header">
                <span className="title">Welcome {handle}</span>

                <span className="description">Choose one of the following sheets</span>
            </div>

            <div className="cards">

            </div>
        </div>
    )
}

export default SheetsPage