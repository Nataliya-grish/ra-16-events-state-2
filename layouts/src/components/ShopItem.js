import React from "react";
import PropTypes from "prop-types";

export default function ShopItem({ item }) {
  const styles = {
    backgroundImage: "url(" + item.img + ")"
  };
  return (
    <div className="ShopItem" style={styles}>
      <img src={item.img} alt={"photo" + item.name} className="item-image" />
      <h3 className="item-name">{item.name}</h3>
      <span>{item.color}</span>
      <div className="item-price">{"$" + item.price}</div>
      <button className="btn">Add to item</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};
