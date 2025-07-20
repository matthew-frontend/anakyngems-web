import React from "react";

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  totalItems,
  itemPerPage,
  startIndex,
  endIndex 
}) {
  if (!totalPages || totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage > totalPages - 3) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="wg-pagination">
      <button 
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`tf-btn-line style-line-2 ${currentPage === 1 ? 'disabled' : ''}`}
      >
        <span className="text-body">PREV</span>
      </button>
      
      <ul className="pagition-list">
        {getPageNumbers().map((pageNum) => (
          <li key={pageNum}>
            {pageNum === currentPage ? (
              <p className="pagination-item active">{pageNum}</p>
            ) : (
              <button
                onClick={() => onPageChange(pageNum)}
                className="pagination-item link"
              >
                {pageNum}
              </button>
            )}
          </li>
        ))}
      </ul>
      
      <button 
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`tf-btn-line style-line-2 ${currentPage === totalPages ? 'disabled' : ''}`}
      >
        <span className="text-body">NEXT</span>
      </button>
      
      {totalItems && (
        <div className="pagination-info">
          <span className="text-caption text-main-4">
            Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} products
          </span>
        </div>
      )}
    </div>
  );
}
