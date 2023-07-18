import styled from 'styled-components';

export const AddAuthorLoaderContainer = styled.div`
    ${({ theme }) => theme.flexStyles('start', 'center')};
    padding: 10.5px 0;
`;

export const AddAuthorsErr = styled.div`
    font-weight: 500;
`;
