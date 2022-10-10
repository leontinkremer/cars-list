import React from "react";
import PropTypes from "prop-types";

import "./_Filter.scss";

const Filter = ({ items, filter, onChangeFilter, children }) => {
  return (
    <div className="filter">
      <div className="filter__header">
        <p className="filter__header__title">Hersteller</p>
      </div>
      <div className="filter__body">{children}</div>
    </div>
  );
};

Filter.propTypes = {
  // массив строк
  items: PropTypes.array.isRequired,
  // строка
  filter: PropTypes.string,
  // функция
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
