import React from 'react'
import './styles.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Loading() {
    return (
        <div className="loading-background">
            <div className="loading">
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>
        </div>
    )
}

export default Loading