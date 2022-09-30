import React from "react";

import "./_Filter.scss";

const Filter = ({ children }) => {
  return (
    <div className="filter">
      <div className="filter__header">
        <p className="filter__header__title">Hersteller</p>
      </div>
      <div className="filter__body">{children}</div>
    </div>
  );
};

export default Filter;
