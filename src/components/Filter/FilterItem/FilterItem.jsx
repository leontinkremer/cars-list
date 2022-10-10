import React from "react";

import "./_FilterItem.scss";

const FilterItem = ({ children, id, onChangeFilter }) => {
  return (
    <div
      id={id}
      className="filter__item"
      onClick={(e) => onChangeFilter(e.target)}
    >
      <p className="filter__item__text">{children}</p>
    </div>
  );
};

export default FilterItem;
