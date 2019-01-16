import React from "react";
import './Card.css';

// Pass the image into each card so all 12 are rendered
const Card = (props) => (
    <div className="container">
        <div className="card" onClick={() => props.clickHandler(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    </div>
);

export default Card;
