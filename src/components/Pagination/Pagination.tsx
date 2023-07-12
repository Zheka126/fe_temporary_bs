import arrowLeft from '/assets/chevronLeft.png';
import arrowRight from '/assets/chevronRight.png';

import { PaginationContainer, StyledPagination } from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageCount: number; 
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  pageCount
}: PaginationProps) => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <PaginationContainer data-testid="pagination-container">
      <StyledPagination
        pageCount={pageCount}
        forcePage={currentPage - 1}
        marginPagesDisplayed={0}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        activeClassName="active"
        breakLabel=""
        previousLabel={
          <img
            src={arrowLeft}
            alt="Go to the previous page"
            data-testid="previous-pagination-button"
          />
        }
        nextLabel={
          <img
            src={arrowRight}
            alt="Go to the next page"
            data-testid="next-pagination-button"
          />
        }
        data-testid="pagination"
      />
    </PaginationContainer>
  );
};
