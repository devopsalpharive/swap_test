import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 20) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-end items-center mt-6 space-x-2">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-md hover:bg-gray-800">
        <FaChevronLeft />
      </button>

      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <button key={index} onClick={() => onPageChange(page)} className={`px-3 py-1 rounded-md ${currentPage === page ? "bg-gray-600 text-white" : "hover:bg-gray-800"}`}>
            {page}
          </button>
        ) : (
          <span key={index} className="px-2">...</span>
        )
      )}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded-md hover:bg-gray-800">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
