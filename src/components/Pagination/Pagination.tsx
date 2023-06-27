import { PaginationContainer, StyledPagination } from './Pagination.styles';

export const Pagination = () => {
  const handlePageChange = ({ selected }: number) => {
    // sent selected page to backend
  };

  return (
    <PaginationContainer>
      <StyledPagination
        pageCount={20}
        marginPagesDisplayed={0}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        activeClassName="active"
        breakLabel=""
        previousLabel={<img src="src/assets/chevronLeft.png" alt="Previous" />}
        nextLabel={<img src="src/assets/chevronRight.png" alt="Next" />}
      />
    </PaginationContainer>
  );
};
