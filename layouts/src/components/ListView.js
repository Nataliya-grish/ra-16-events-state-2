import React from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

export default function ListView({ items }) {
  return (
    <div className="ListView">
      {items.map((elem) => (
        <ShopItem item = {elem} key = {Math.random()} />
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};
