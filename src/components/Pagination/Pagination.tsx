import arrowLeft from 'src/assets/chevronLeft.png';
import arrowRight from 'src/assets/chevronRight.png';
import { PaginationContainer, StyledPagination } from './Pagination.styles';

export const Pagination = () => {
  const handlePageChange = (page: number) => {
    // sent selected page to backend
    console.log(page);
  };

  return (
    <PaginationContainer>
      <StyledPagination
        pageCount={20}
        marginPagesDisplayed={0}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => handlePageChange(selected + 1)}
        activeClassName="active"
        breakLabel=""
        previousLabel={<img src={arrowLeft} alt="Previous" />}
        nextLabel={<img src={arrowRight} alt="Next" />}
      />
    </PaginationContainer>
  );
};
