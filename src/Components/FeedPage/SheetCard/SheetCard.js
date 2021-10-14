import React from "react";
import './styles.css'
import { askfm, github, twitter, linkedIn } from './assets'
import { useHistory } from "react-router";

function SheetCard({ sheet }) {
    let stars = getStars(sheet.difficulty)
    const history = useHistory()

    const navigate = () => history.push(`/feed/${sheet.name}`);

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
                {socialComponent(sheet.contact)}
            </div>

        </div>
    )
}

function socialComponent(contact) {
    const socialLogos = {
        'ask': askfm,
        'Github': github,
        'twitter': twitter,
        'linkedIn': linkedIn
    }

    const contactsComponent = []
    for (const el in contact) {
        contactsComponent.push(
            <a key={el} target="_blank" rel="noopener noreferrer" href={contact[el]}>
                <img src={socialLogos[el]} alt={el} className={el === 'ask' ? "askfm" : ""} />
            </a>)
    }

    return contactsComponent
}

function getStars(count) {
    let stars = ''
    for (let i = 0; i < count; i++)
        stars += '⭐ '
    return stars
}

export default SheetCard