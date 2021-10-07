import React, { useState, useEffect } from 'react'
import './styles.css'
import extractSubmissions from '../../Models/submissions'
import Loading from './Loading'

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

    console.log(submissions.size)
    const tableData = Array.from(submissions.values()).map((submission) => {
        return (
            <tr key={submission.name + submission.contestId}>
                <td>{submission.name}</td>
                <td>{submission.verdict}</td>
                <td>{submission.index}</td>
                <td>{submission.contestId}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default ProblemsPage