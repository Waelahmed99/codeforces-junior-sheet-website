import './styles.css'
import Header from './Header'
import MainPage from './MainPage'
import React, { useState, useEffect } from "react";
import { getSheets } from "../../Services/GetSheets";
import responseType from '../../Services/Response'
import Loading from '../Loading'

function HomePage() {
    const [sheets, setSheets] = useState([])
    const [response, setResponse] = useState(responseType.LOADING)

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
    }, [])

    const comp = (
        <div className="home-wrapper">
            <Header />
            <MainPage sheets={sheets} />
        </div>
    )
    return response === responseType.LOADING ? <Loading /> : comp
}

export default HomePage