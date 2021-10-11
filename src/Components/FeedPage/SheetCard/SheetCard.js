import React from "react";
import './styles.css'
import { useHistory, useLocation } from "react-router-dom";

// _id, image, description,
function SheetCard({ sheet, handle }) {
    let stars = getStars(sheet.difficulty)
    const history = useHistory()
    const submissions = useLocation().state.submissions

    function onTap() {
        history.push({
            pathname: `/${handle}/feed/${sheet.name}`,
            state: { sheet, submissions }
        })
    }

    return (
        <div className="card-container" onClick={onTap}>

            <div className="details">
                <span className="name">{sheet.name}</span>
                <span className="author">{sheet.author}</span>
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