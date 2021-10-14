import React from "react";
import './styles.css'
import { askfm, github, twitter, linkedIn } from './assets'
import { useHistory } from "react-router";

function SheetCard({ sheet }) {
    let stars = getStars(sheet.difficulty)
    const history = useHistory()

    function navigate() {
        history.push({
            pathname: `/feed/${sheet.name}`,
            state: { sheet }
        })
    }

    const socialLogos = {
        'ask': askfm,
        'Github': github,
        'twitter': twitter,
        'linkedIn': linkedIn
    }

    const contactsComponent = []
    for (const el in sheet.contact) {
        contactsComponent.push(
            <a key={el} target="_blank" rel="noopener noreferrer" href={sheet.contact[el]}>
                <img src={socialLogos[el]} alt={el} className={el === 'ask' ? "askfm" : ""} />
            </a>)
    }

    return (
        <div className="card-container">

            <div className="clickable" onClick={navigate}>
                <div className="details">
                    <span className="name">{sheet.name}</span>
                    <span className="author">{sheet.author}</span>
                </div>

                <div className="difficulty-container">
                    <span className="difficulty">Difficulty: {stars}</span>
                </div>
            </div>

            <div className="contacts-container">
                {contactsComponent}
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