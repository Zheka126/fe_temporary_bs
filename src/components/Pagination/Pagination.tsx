import arrowLeft from "src/assets/chevronLeft.png";
import arrowRight from "src/assets/chevronRight.png";

import { PaginationContainer, StyledPagination } from "./Pagination.styles";

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
        previousLabel={<img src={arrowLeft} alt="Previous" />}
        nextLabel={<img src={arrowRight} alt="Next" />}
      />
    </PaginationContainer>
  );
};
