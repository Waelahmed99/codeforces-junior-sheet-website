import React, { useState, useEffect } from "react";
import './styles.css'
import { useLocation } from 'react-router-dom'
import responseType from '../../Services/Response'
import Loading from '../Loading'
import { getSheetByName } from "../../Services/GetSheets";
import ProblemsTable from "../SheetPage/ProblemsTable";

function SheetPage({ match }) {
    const [response, setResponse] = useState(responseType.LOADING)
    const [sheet, setSheet] = useState([])

    const location = useLocation()
    const name = match.params.name

    useEffect(() => {

        async function apiCall() {
            // const name = location.state
            let sheet = await getSheetByName(name)
            if (sheet.status === "error")
                setResponse(responseType.ERROR)
            else {
                setSheet(sheet.result ? sheet.result.data : sheet.data)
                setResponse(responseType.PASSED)
            }
        }
        apiCall()

    }, [location, name])


    function getChild(response) {
        switch (response) {
            case responseType.LOADING:
                return <Loading />
            case responseType.PASSED: {
                return <ProblemsTable sheetData={sheet} match={match} />
            }
            case responseType.ERROR:
                return <p>Error occurred</p>
            default:
                return <p>Error occurred</p>
        }
    }

    return getChild(response)
}

export default SheetPage