import React from "react";
import "../Card/Card.css";
const Card = ({ name, text, img, id, key, type, artist }) => {
  return (
    <div className="single-card">
      <div className="image">
        <img src={img} alt={id}></img>
      </div>
      <p>{artist}</p>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <p>{type}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
