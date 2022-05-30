import "./Pagination.css";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { constructRouteParams } from "utils/";
import { PaginationConstant } from "config";

export default function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pagination = useSelector((state) => state.product.pagination);
  const currentPage =
    searchParams.get(PaginationConstant.PAGE) ||
    pagination[PaginationConstant.PAGE];

  const currentParams = constructRouteParams([...searchParams]);

  function handlePaginationClick(value) {
    currentParams[PaginationConstant.PAGE] = parseInt(currentPage) + value;
    setSearchParams(currentParams);
  }

  return (
    <div className="pagination__container">
      <div className="pagination">
        <div className="previous">
          <button
            type="button"
            onClick={() => handlePaginationClick(-1)}
            disabled={currentPage <= 1}
            className="btn"
          >
            Previous
          </button>
        </div>
        <div className="center">
          <span className="pageInfo">
            <span className="current">{currentPage}</span>
            <span>/</span>
            <span className="totalPages">{pagination.total}</span>
          </span>
        </div>
        <div className="next">
          <button
            type="button"
            onClick={() => handlePaginationClick(1)}
            disabled={pagination && currentPage >= pagination.total}
            className="btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
