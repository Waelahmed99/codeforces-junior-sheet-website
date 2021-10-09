import React, { useState, useEffect } from "react";
import './styles.css'
import { extractSubmissions } from '../../Models/submissions'
import Loading from '../Loading'
import NoHandle from './NoHandle'
import { useHistory } from "react-router-dom";

function HandlePage({ match }) {
    const [submissions, setSubmissions] = useState(new Map())
    const [error, setError] = useState(false)
    const handle = match.params.handle
    const history = useHistory()

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

    }, [handle, submissions.size])


    /*
        Navigate to /feed
        after fetching data.
    */
    useEffect(() => {

        console.log("Entered this useEffect")
        if (submissions.size !== 0)
            history.push(`/${handle}/feed`);

    }, [submissions, handle, history])

    return error ? <NoHandle /> : <Loading />
}

export default HandlePage