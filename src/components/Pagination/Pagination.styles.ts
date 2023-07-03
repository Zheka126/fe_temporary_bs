import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledPagination = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 5px;

  .pagination-ellipsis {
    display: none;
  }

  li {
    a {
      ${({ theme }) => theme.flexStyles()}
      width: 30px;
      height: 30px;
      color: #000;
      background-color: #fff;
      /* background-color: ${({ theme }) => theme.colors.lightGray}; */
      border-radius: 1px;
      cursor: pointer;
    }

    &:hover {
      box-shadow: 0px 2px 10px -3px rgba(0, 0, 0, 0.18);
    }
    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.outline};
      box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.08);
    }
  }
  .active {
    a {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
      cursor: default;
    }
  }
`;
