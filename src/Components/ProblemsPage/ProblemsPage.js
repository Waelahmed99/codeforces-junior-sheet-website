import React, { useState, useEffect } from 'react'
import './styles.css'
import { extractSubmissions } from '../../Models/submissions'
import Loading from './Loading'
import ProblemRow from './ProblemRow'
import { sheetData } from '../../Models/Sheet1'

function ProblemsPage({ match }) {
    const [submissions, setSubmissions] = useState(new Map())
    const handle = match.params.handle

    /*
        Fetch data on page load.
        Pass data to [submissions]
    */
    useEffect(() => {

        async function fetchSubmissions() {
            const fetchFromCF = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`)
            const submissions = await fetchFromCF.json()

            setSubmissions(extractSubmissions(submissions.result))
        }

        if (submissions.size === 0)
            fetchSubmissions()
        return () => {
            console.log("Cleanup")
        }
    }, [handle, submissions.size])


    if (submissions.size === 0)
        return (<Loading />)

    // const tableData = Array.from(submissions.values()).map((submission) => {
    //     return (<ProblemRow problem={submission} key={submission.contestId + submission.index} />)
    // })

    const tableData = sheetData.map((element) => {
        return (<ProblemRow content={element} key={element.name} />)
    })

    return (
        <div className="overflow-table">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Problem name</th>
                        <th>Verdict</th>
                        <th>Tried</th>
                        <th>Links</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default ProblemsPage