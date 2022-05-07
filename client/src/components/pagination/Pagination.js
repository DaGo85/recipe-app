// Pagination element for Home, Gallery, Stories and SingleStory

import { usePagination, DOTS } from "../../utility/usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="flex md:gap-3">
      {/* Left navigation arrow */}
      <li
        className="pagination-arrow pr-1"
        onClick={() => {
          if (currentPage === 1) {
            return;
          }
          onPrevious();
        }}
      >
        <svg
          className={`h-8 md:h-12 transition-all duration-500 ease-in-out ${
            currentPage !== 1 && "hover:fill-linkhover button-effect-select"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill={currentPage === 1 ? "grey" : "bg-b"}
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
        </svg>
      </li>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-dots">
              ...
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={index}
            className={`pagination-item text-slate-100  hover:bg-linkhover transition-all duration-500 ease-in-out ${
              pageNumber === currentPage
                ? "bg-linkhover"
                : "bg-b button-effect-select"
            }`}
            onClick={() => {
              onPageChange(pageNumber);
            }}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className="pagination-arrow pl-1"
        onClick={() => {
          if (currentPage === lastPage) {
            return;
          }
          onNext();
        }}
      >
        <svg
          className={`h-8 md:h-12 transition-all duration-500 ease-in-out ${
            currentPage !== lastPage &&
            "hover:fill-linkhover button-effect-select"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill={currentPage === lastPage ? "grey" : "bg-b"}
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
