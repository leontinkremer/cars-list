import React from "react";

import "./_FilterItem.scss";

const FilterItem = ({ children }) => {
  return (
    <div className="filter__item">
      <p className="filter__item__text">{children}</p>
    </div>
  );
};

export default FilterItem;
