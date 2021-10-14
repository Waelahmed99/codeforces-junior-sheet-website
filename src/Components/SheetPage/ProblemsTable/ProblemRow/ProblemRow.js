import React from 'react'
import './styles.css'
import { verdicts } from '../../../../Services/ExtractSubmissions'

function ProblemRow({ content, submissions }) {
    // content->type 
    // Link, CF, SPOJ, UVA
    switch (content.type) {
        case "SPOJ":
        case "UVA":
            return UnknownProblem(content)
        case "Link":
            return LinkRow(content)
        case "CF":
            return CFRow(content, submissions)
        default:
            return (<tr></tr>)
    }
}

function CFRow(content, submissions) {
    const splitter = content.link.split('/')
    const contestId = splitter[splitter.length - 2]
    const index = splitter[splitter.length - 1]

    let verdict = verdicts.NOT_TRIED
    let tried = '0'

    const id = contestId + index
    if (submissions.has(id)) {
        verdict = submissions.get(id).verdict
        const count = submissions.get(id).count
        if (count === 0) tried = '🥳'
        else tried = `+${count}`
    }

    const rowClass = rowClassName(verdict)
    return (
        <tr className={rowClass}>
            <td>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={content.link}>
                    {content.name}
                </a>
            </td>
            <td>{verdict}</td>
            <td>{tried}</td>
        </tr>
    )
}

function UnknownProblem(content) {
    return (

        <tr>
            <td>
                <a 
                className="unknown"
                target="_blank"
                rel="noopener noreferrer"
                href={content.link}>
                    {content.name}
                </a>
            </td>
            <td>Unknown</td>
            <td>{content.type}</td>
        </tr >
    )
}

function LinkRow(content) {
    return (
        <tr>
            <td colSpan="100%">
                <a className="link" href={content.link} target="_blank" rel="noopener noreferrer">
                    {content.name}
                </a>
            </td>
        </tr>
    )
}

function rowClassName(verdict) {
    switch (verdict) {
        case verdicts.ACCEPTED:
            return "accepted-row"
        case verdicts.NOT_TRIED:
            return "tried-row"
        default:
            return "wrong-row"
    }
}

export default ProblemRow