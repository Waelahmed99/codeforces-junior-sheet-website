import React, { useState, useEffect } from "react";
import { extractSubmissions } from "../../../Services/ExtractSubmissions";
import { fetchSubmissions } from "../../../Services/FetchSubmissions";
import responseType from "../../../Services/Response";
import Loading from "../../Loading";
import ProblemRow from "./ProblemRow";
import './styles.css'

function ProblemsTable({ match, sheetData }) {
    const [submissions, setSubmissions] = useState(new Map())
    const [response, setResponse] = useState(responseType.LOADING)

    const handle = match.params.handle

    useEffect(() => {
        async function apiCall() {
            const response = await fetchSubmissions(handle)
            if (response.status === 'error')
                setResponse(responseType.ERROR)
            else {
                setSubmissions(extractSubmissions(response.result))
                setResponse(responseType.PASSED)
            }
        }
        apiCall()
    }, [handle])

    if (response === responseType.LOADING) return <Loading />

    const tableData = sheetData.map((el, idx) => {
        return <ProblemRow key={idx} content={el} submissions={submissions} />
    })


    return (
        <div className="overflow-table">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Problem name</th>
                        <th>Verdict</th>
                        <th>Tried</th>
                        {/* <th>Links</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default ProblemsTable