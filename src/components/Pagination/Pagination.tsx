import arrowLeft from "src/assets/chevronLeft.png";
import arrowRight from "src/assets/chevronRight.png";

import { PaginationContainer, StyledPagination } from "./Pagination.styles";

interface PaginationProps {
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const Pagination = ({ currentPage, setCurrentPage }: PaginationProps) => {
  
  const handlePageChange = (selectedPage: any) => {
    setCurrentPage(selectedPage);
  };

  return (
    <PaginationContainer>
      <StyledPagination
        pageCount={20}
        forcePage={currentPage - 1}
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
