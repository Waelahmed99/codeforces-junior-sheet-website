import React, { useState, useEffect } from "react";
import './styles.css'
import { useLocation } from 'react-router-dom'
import responseType from '../../Services/Response'
import Loading from '../Loading'
import { getSheetByName } from "../../Services/GetSheets";

function SheetPage({ match }) {
    const [response, setResponse] = useState(responseType.LOADING)
    const [sheet, setSheet] = useState([])
    console.log(sheet)

    const location = useLocation()
    const name = match.params.id

    useEffect(() => {

        async function apiCall() {
            let sheet
            try {
                sheet = location.state.sheet
            } catch {
                sheet = await getSheetByName(name)
            } finally {
                if (sheet.status === "error")
                    setResponse(responseType.ERROR)
                else {
                    setSheet(sheet.result ? sheet.result.data : sheet.data)
                    setResponse(responseType.PASSED)
                }

            }
        }
        apiCall()

    }, [location, name])


    function getChild(response) {
        switch (response) {
            case responseType.LOADING:
                return <Loading />
            case responseType.PASSED:
                return <p>Passed</p>
            case responseType.ERROR:
                return <p>Error occurred</p>
            default:
                return <p>Error occurred</p>
        }
    }

    return getChild(response)
}

export default SheetPage