import React from "react";

import "./_List.scss";

const List = ({ children }) => {
  return (
    <div className="list">
      <div className="list__list-header">
        <span className="list__list-header__list-header-item">
          Fahrzeuganfrage
        </span>
        <span className="list__list-header__list-header-item">Kunde</span>
        <span className="list__list-header__list-header-item">Fahrzeug</span>
        <span className="list__list-header__list-header-item">Status</span>
      </div>
      <div className="list__list-body">{children}</div>
    </div>
  );
};

export default List;
