import React from "react";
import './styles.css'
import sheetThumb from './mostafa-saad.jpeg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

function SheetCard({ handle, src, name, content, author, id }) {
    return (
        <Link to={`/handle/${handle}/${id}`} className="card-link">
            <div className="card-container">
                <h2>{name}</h2>
                <h4>{author}</h4>
                <p>{content}</p>
            </div>
        </Link>
    )
}

export default SheetCard