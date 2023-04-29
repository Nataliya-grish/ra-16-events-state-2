import React from "react";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard";

export default function CardView({ cards }) {
  return (
    <div className="CardView">
      {cards.map((elem) => (
        <ShopCard card = {elem} key = {Math.random()} />
      ))}
    </div>
  );
}

CardView.propTypes = {
  cards: PropTypes.array.isRequired,
};
