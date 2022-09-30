import React from "react";
import _ from "lodash";

import "./_Pagination.scss";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  // Errechne, wie viele Seite du benötigst
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <a
          key={"page_" + page}
          className={
            "pagination__item" +
            (page === currentPage ? " pagination__item--active" : "")
          }
          onClick={() => onPageChange(page)}
        >
          {page}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
