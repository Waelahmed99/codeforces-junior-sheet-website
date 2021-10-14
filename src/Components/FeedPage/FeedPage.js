import React from "react";
import './styles.css'
import SheetCard from "./SheetCard/SheetCard";

function FeedPage({ sheets }) {
    const sheetsComponents = sheets.map((el) => {
        return (<SheetCard key={el._id} sheet={el} />)
    })

    return (
        <div className="feed-container">
            <div className="cards">
                {sheetsComponents}
            </div>
        </div>
    )
}

export default FeedPage