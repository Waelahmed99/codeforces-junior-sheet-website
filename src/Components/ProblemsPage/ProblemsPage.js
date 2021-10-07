import React, { useState, useEffect } from 'react'
import './styles.css'
import extractSubmissions from '../../Models/submissions'

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

        if (submissions.size == 0)
            fetchSubmissions()
        return () => {
            console.log("Cleanup")
        }
    }, [handle])

    return (
        <div>
            <h1> Problems page for handle: {handle} </h1>
        </div>
    )
}

export default ProblemsPage