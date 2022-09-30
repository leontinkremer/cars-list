import React from "react";
import "./_ListItem.scss";

const ListItem = ({ children }) => {
  return <div className="list-body-item">{children}</div>;
};

export default ListItem;
