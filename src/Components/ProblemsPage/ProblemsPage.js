import React from 'react'
import './styles.css'

function ProblemsPage({ match }) {
    const handle = match.params.handle
    
    return (
        <div>
            <h1> Problems page for handle: { handle } </h1>
        </div>
    )
}

export default ProblemsPage