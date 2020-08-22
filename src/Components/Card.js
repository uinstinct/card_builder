import React from 'react';

import "./Card.css";


function randomColour() {
    const colours = ['red', 'green', 'blue'];
    const randIndex = Math.floor(Math.random() * 3);
    return colours[randIndex];
}

function Card(props) {
    let { name, shows, abilities, img, id } = props;
    abilities = Array.isArray(abilities) ? abilities : abilities.split(',');
    let listAbilities = [], counter = 0;
    for (const ability of abilities) {
        const listAbility =
            <label key={counter++} className={"class-badge badge-" + randomColour()}>{ability}</label>
        listAbilities.push(listAbility);
    }
    return (
        <div className={"character-card-v2 card-" + randomColour()}>
            <div className="portrait" style={{ backgroundImage: 'url(' + img + ')' }}>
            </div>
            <div className="details">
                <div className="names">
                    <div className="bigname"><div className="textinside">{name}</div></div>
                    <small>{shows}</small>
                </div>
                <div className="classes">
                    {listAbilities}
                </div>
            </div>
        </div>);
}

export default Card;