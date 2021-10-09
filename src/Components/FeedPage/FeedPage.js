import React, { useEffect } from "react";
import './styles.css'
// import { useLocation, useHistory } from 'react-router-dom'

function SheetsPage({ match }) {
    // const history = useHistory()
    // const state = useLocation().state
    const handle = match.params.handle

    /* 
        If user accessed `/:handle/feed` directly
        Go back to `/:handle` page to extract data.
    */
    // let submissions
    // try {
    //     submissions = state.submissions
    // } catch {
    //     history.push(`/${handle}`)
    // }
 
    /*
        Request sheets API call 
           When page loads
    */
    useEffect(() => {
        async function apiCall() {
            // await getSheets()
        }
        apiCall()
    }, [])

    return (
        <div className="feed-container">
            <div className="header">
                <h3>Welcome {handle}</h3>
            </div>
        </div>
    )
}

export default SheetsPage