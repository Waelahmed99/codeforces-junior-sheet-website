import React, { useState, useEffect } from "react";
import './styles.css'
import { extractSubmissions } from '../../Models/submissions'
import Loading from './Loading'
import NoHandle from './NoHandle'
import SheetCard from "./SheetCard/SheetCard";
import sheetData from '../../Models/Sheets'

function SheetsPage({ match }) {
    const [submissions, setSubmissions] = useState(new Map())
    const [error, setError] = useState(false)
    const handle = match.params.handle

    /*
        Fetch data on page load.
        Pass data to [submissions]
    */
    useEffect(() => {

        async function fetchSubmissions() {
            const fetchFromCF = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`)
            const submissions = await fetchFromCF.json()

            if (submissions.status === 'FAILED')
                setError(true)
            else
                setSubmissions(extractSubmissions(submissions.result))
        }

        if (submissions.size === 0)
            fetchSubmissions()
        return () => {
            console.log("Cleanup")
        }
    }, [handle, submissions.size])

    if (error)
        return (<NoHandle />)

    if (submissions.size === 0)
        return (<Loading />)

    
    const sheetsComponents = sheetData.map(element => {
        return (
            <SheetCard
                key={element.id}
                {...element}
                handle={handle}
            />
        )
    });

    return (
        <div className="sheets-body">
            <div className="header">
                <h4 className="title"> Welcome {handle}</h4>
                <p className="content"> Choose between the following sheets </p>
            </div>

            <div className="sheets">
                <ul className="cards">
                    {sheetsComponents}
                </ul>
            </div>
        </div>
    )
}

export default SheetsPage