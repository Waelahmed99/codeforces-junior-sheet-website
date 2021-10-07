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

    const page = (
        <div>
            <table class="rwd-table">
                <tr>
                    <th>Movie Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                    <th>Gross</th>
                </tr>
                <tr>
                    <td data-th="Movie Title">Star Wars</td>
                    <td data-th="Genre">Adventure, Sci-fi</td>
                    <td data-th="Year">1977</td>
                    <td data-th="Gross">$460,935,665</td>
                </tr>
                <tr>
                    <td data-th="Movie Title">Howard The Duck</td>
                    <td data-th="Genre">"Comedy"</td>
                    <td data-th="Year">1986</td>
                    <td data-th="Gross">$16,295,774</td>
                </tr>
                <tr>
                    <td data-th="Movie Title">American Graffiti</td>
                    <td data-th="Genre">Comedy, Drama</td>
                    <td data-th="Year">1973</td>
                    <td data-th="Gross">$115,000,000</td>
                </tr>
            </table>
        </div>
    )

    return (
        <div>
            {submissions.size === 0 ? <Loading /> : page}
        </div>
    )
}

export default ProblemsPage