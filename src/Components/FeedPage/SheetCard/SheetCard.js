import React from "react";
import './styles.css'
import { Link } from "react-router-dom";

function SheetCard({ _id, author, name, image, description, data, difficulty, handle }) {
    let stars = getStars(difficulty)
    return (
        <Link to={`/${handle}/feed/${_id}`} className="card-link">
            <div className="card-container">

                {/* <div className="image-container">
                    <img className="image" src={image} alt={author} />
                </div> */}

                <div className="details">
                    <span className="name">{name}</span>
                    <span className="author">{author}</span>
                </div>

                <div className="difficulty-container">
                    <span className="difficulty">Difficulty: {stars}</span>
                </div>
            </div>
        </Link>
    )
}

function getStars(count) {
    let stars = ''
    for (let i = 0; i < count; i++)
        stars += '⭐ '
    return stars
}

export default SheetCard