import React, { useState, useEffect } from "react";
import './styles.css'
import Loading from '../Loading'
import NoHandle from './NoHandle'
import { useHistory } from "react-router-dom";
import checkHandle from '../../Services/CheckHandleExist'
import responseType from "../../Services/Response";

function HandlePage({ match }) {
    const [response, setResponse] = useState(responseType.LOADING)
    const handle = match.params.handle
    const history = useHistory()

    /*
        Fetch data on page load.
        Pass data to [submissions]
    */
    useEffect(() => {
        async function apiCall() {
            const response = await checkHandle(handle)
            if (response.status === 'FAILED')
                setResponse(responseType.ERROR)
            else
                setResponse(responseType.PASSED)
        }
        apiCall()
    }, [handle])


    /*
        Navigate to `/feed`
        after fetching data.
    */
    useEffect(() => {

        if (response === responseType.PASSED) {
            history.replace({
                pathname: `/${handle}/feed`,
                state: { handle: handle }
            });
        }

    }, [handle, history, response])

    return (response === responseType.ERROR) ? <NoHandle /> : <Loading />
}

export default HandlePage