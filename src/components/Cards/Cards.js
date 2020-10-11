import React, { useState, useEffect, Fragment } from "react";
import Greeting from "../Greeting/Greeting";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import "../Cards/Cards.css";

const Cards = ({ name }) => {
  const [cards, setCards] = useState([]);
  const [searchCard, setSearchCard] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchCard(event.target.value);
  };

  useEffect(() => {
    fetch(
      "https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English"
    )
      .then((res) => res.json())
      .then((data) => {
        setCards(data.cards);
      });
  }, []);

  useEffect(() => {
    const resultsName = cards.filter((card) =>
      card.name.toLowerCase().includes(searchCard)
    );

    // const resultsText = cards.filter((card) =>
    //   card.text.toLowerCase().includes(searchCard)
    // );

    setSearchResults(resultsName);
    // setSearchResults(resultsText);
  }, [searchCard, cards]);

  return (
    <Fragment>
      <Greeting name={name} />
      <Search handleSearch={handleSearch} />
      <Filters />
      <div className="all-cards">
        {searchResults.map((card, i) => (
          <Card
            id={card.id}
            img={card.imageUrl}
            name={card.name}
            text={card.text}
            key={card.id}
            type={card.type}
            artist={card.artist}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Cards;
