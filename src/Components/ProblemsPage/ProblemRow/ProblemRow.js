import React from 'react'
import './styles.css'
import { verdicts } from '../../../Models/submissions'

function ProblemRow({ problem }) {
    const rowClass = rowClassName(problem.verdict)
    return (
        <tr key={problem.name + problem.contestId} className={rowClass}>
            <td>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}>
                    {problem.name}
                </a>
            </td>
            <td>{problem.verdict}</td>
            <td>{problem.count !== 0 ? `+${problem.count}` : "🥳"}</td>
        </tr>
    )
}

function rowClassName(verdict) {
    switch (verdict) {
        case verdicts.ACCEPTED:
            return "accepted-row"
        case verdicts.WRONG_ANSWER:
            return "wrong-row"
        default:
            return "tried-row"
    }
}

export default ProblemRow