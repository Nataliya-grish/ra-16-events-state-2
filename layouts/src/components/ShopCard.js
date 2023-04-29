import React from "react";
import PropTypes from "prop-types";

export default function ShopCard({ card }) {
  const styles = {
    backgroundImage: "url(" + card.img + ")"
  };
  return (
    <div className="ShopCard" style={styles}>
      <h3 className="card-name">{card.name}</h3>
      <span className="card-color">{card.color}</span>
      <div className="card-bottom">
        <span>{"$" + card.price}</span>
        <button className="btn">Add to card</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  card: PropTypes.object.isRequired,
};
