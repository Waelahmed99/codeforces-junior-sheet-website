import React, { useState, useEffect } from "react";
import './styles.css'
import { useLocation } from 'react-router-dom'
import responseType from '../../Services/Response'
import Loading from '../Loading'

function SheetPage({ match }) {
    const [response, setResponse] = useState(responseType.LOADING)
    const location = useLocation()
    const name = match.params.id
    console.log(name)
    let data

    useEffect(() => {


        try {
            data = location.state.data
        } catch {
            // fetch data for [id]
        } finally {
            setResponse(responseType.PASSED)
        }

    }, [])

    if (response === responseType.LOADING) return <Loading />

    return (
        <div>

        </div>
    )
}

export default SheetPage