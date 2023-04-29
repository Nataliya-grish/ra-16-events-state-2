import React from "react";
import PropTypes from "prop-types";

export default function IconSwitch({ obj }) {
  return (
    <div className="iconSwitch">
      <button className="material-icons" onClick={obj.onSwitch}>
        {obj.icons}
      </button>
    </div>
  );
}

IconSwitch.propTypes = {
  obj: PropTypes.object.isRequired,
};
