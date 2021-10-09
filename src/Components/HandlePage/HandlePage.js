import React, { useState, useEffect } from "react";
import './styles.css'
import { extractSubmissions } from '../../Models/submissions'
import Loading from '../Loading'
import NoHandle from './NoHandle'
import { useHistory } from "react-router-dom";
import { fetchSubmissions } from "../../Services/FetchSubmissions";

const responseType = { LOADING: "loading", PASSED: "Passed", ERROR: "Error" }

function HandlePage({ match }) {
    const [submissions, setSubmissions] = useState(new Map())
    const [response, setResponse] = useState(responseType.LOADING)
    const handle = match.params.handle
    const history = useHistory()

    /*
        Fetch data on page load.
        Pass data to [submissions]
    */
    useEffect(() => {

        if (response === responseType.LOADING) {
            const CodeforcesRequest = fetchSubmissions(handle)
            if (CodeforcesRequest.status === 'FAILED')
                setResponse(responseType.ERROR)
            else {
                setResponse(responseType.PASSED)
                setSubmissions(extractSubmissions(CodeforcesRequest.result))
            }
        }

    }, [handle, response, submissions])


    /*
        Navigate to /feed
        after fetching data.
    */
    useEffect(() => {

        if (response === responseType.PASSED)
            history.push({
                pathname: `/${handle}/feed`, state: { handle: handle, submissions: submissions }
            });

    }, [response, handle, history, submissions])

    return (response === responseType.ERROR) ? <NoHandle /> : <Loading />
}

export default HandlePage