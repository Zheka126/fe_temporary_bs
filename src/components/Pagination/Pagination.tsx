import arrowLeft from 'src/assets/chevronLeft.png';
import arrowRight from 'src/assets/chevronRight.png';
import { PaginationContainer, StyledPagination } from './Pagination.styles';

export const Pagination = () => {
  const handlePageChange = ({ selected }: { selected: number }) => {
    // sent selected page to backend
    console.log(selected + 1);
  };

  return (
    <PaginationContainer data-testid="pagination-container">
      <StyledPagination
        pageCount={20}
        marginPagesDisplayed={0}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        activeClassName="active"
        breakLabel=""
        previousLabel={
          <img
            src={arrowLeft}
            alt="Previous"
            data-testid="previous-pagination-button"
          />
        }
        nextLabel={
          <img
            src={arrowRight}
            alt="Next"
            data-testid="next-pagination-button"
          />
        }
        data-testid="pagination"
      />
    </PaginationContainer>
  );
};
