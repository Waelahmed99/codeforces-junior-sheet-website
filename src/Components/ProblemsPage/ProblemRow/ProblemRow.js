import React from 'react'
import './styles.css'

function ProblemRow({ problem }) {
    return (
        <tr key={problem.name + problem.contestId}>
            <td>
                <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}>
                    {problem.name}
                </a>
            </td>
            <td>{problem.verdict}</td>
            <td>{problem.count}</td>
        </tr>
    )
}

export default ProblemRow