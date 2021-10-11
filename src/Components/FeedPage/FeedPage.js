import React, { useState, useEffect } from "react";
import './styles.css'
import { useHistory } from 'react-router-dom'
import { getSheets } from "../../Services/GetSheets";
import SheetCard from "./SheetCard/SheetCard";
import responseType from '../../Services/Response'
import Loading from './Loading'

function FeedPage({ match }) {
    const [sheets, setSheets] = useState([])
    const [response, setResponse] = useState(responseType.LOADING)
    const history = useHistory()
    const handle = match.params.handle

    /*
        Request sheets API call 
           When page loads
    */
    useEffect(() => {
        async function apiCall() {
            const output = await getSheets()
            if (output.status === 'error')
                setResponse(responseType.ERROR)
            else {
                setSheets(output.result)
                setResponse(responseType.PASSED)
            }
        }
        apiCall()
    }, [handle, history]) // ??
 
    if (response === responseType.LOADING) return <Loading />

    const sheetsComponents = sheets.map((el) => {
        return (<SheetCard key={el._id} sheet={el} handle={handle} />)
    })

    return (
        <div className="feed-container">
            <div className="header">
                <span className="title">Welcome {handle}</span>

                <span className="description">Choose one of the following sheets</span>
            </div>

            <div className="cards">
                {sheetsComponents}
            </div>
        </div>
    )
}

export default FeedPage