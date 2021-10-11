import React from "react";
import './styles.css'
import { useHistory } from "react-router-dom";

// _id, image, description,
function SheetCard({ author, name, data, difficulty, handle }) {
    let stars = getStars(difficulty)
    const history = useHistory()

    function onTap() {
        history.push({
            pathname: `/${handle}/feed/${name}`,
            state: { data }
        })
    }

    return (
        <div className="card-container" onClick={onTap}>

            <div className="details">
                <span className="name">{name}</span>
                <span className="author">{author}</span>
            </div>

            <div className="difficulty-container">
                <span className="difficulty">Difficulty: {stars}</span>
            </div>
        </div>
    )
}

function getStars(count) {
    let stars = ''
    for (let i = 0; i < count; i++)
        stars += '⭐ '
    return stars
}

export default SheetCard