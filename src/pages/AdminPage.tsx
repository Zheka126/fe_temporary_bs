import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AdminAssignments } from 'src/components/AdminAssignments/AdminAssignments';
import { AdminRoles } from 'src/components/AdminRoles/AdminRoles';
import { Container } from 'src/components/common/Container.styles';
import { Pagination } from 'src/components/Pagination/Pagination';
import { useAppSelector } from 'src/redux/hooks';

import {
  StyledLink,
  SubPageContainer,
  Tabs,
} from './styles/common/common.styles';

const AdminReviews = () => {
  return <div>Reviews</div>;
};

const tabLinks = [
  { path: '/admin/roles', text: 'Manage Roles' },
  { path: '/admin/assignments', text: 'Approve assignments' },
  { path: '/admin/reviews', text: 'Delete reviews' },
];

export const AdminTabPage = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    booksArr,
    roles,
    totalRoleRecords,
    assignmentsArr,
    totalAssignmentsRecords,
  } = useAppSelector(({ role, assignments, books }) => ({
    booksArr: books.books,
    roles: role.roles,
    totalRoleRecords: role.totalRecords,
    assignmentsArr: assignments.assignments,
    totalAssignmentsRecords: assignments.totalRecords,
  }));

  const assignments = assignmentsArr.map((assign) => {
    const dateObject = new Date(assign.requestDate);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear().toString();
    const requestDate = `${day}/${month}/${year}`;

    const bookId = booksArr.find((book) => book.id === assign.bookId)?.title;
    const userId = roles.find((role) => role.id === assign.userId)?.username;

    return {
      ...assign,
      bookId,
      userId,
      requestDate,
    };
  });
  const reviews = 0;

  const currentlyViewedPage =
    location.pathname === '/admin/roles'
      ? 'roles'
      : location.pathname === '/admin/assignments'
      ? 'assignments'
      : 'reviews';

  const pageCount = Math.ceil(
    (currentlyViewedPage === 'roles'
      ? totalRoleRecords
      : currentlyViewedPage === 'assignments'
      ? totalAssignmentsRecords
      : reviews) / 12
  );

  return (
    <SubPageContainer>
      <Container>
        <Tabs>
          {tabLinks.map((link) => {
            return (
              <StyledLink
                key={link.path}
                to={link.path}
                isactive={location.pathname === link.path}
              >
                {link.text}
              </StyledLink>
            );
          })}
        </Tabs>

        <Routes>
          <Route
            index
            path="roles"
            element={<AdminRoles roles={roles} currentPage={currentPage} />}
          />
          <Route
            path="assignments"
            element={
              <AdminAssignments
                assignments={assignments}
                currentPage={currentPage}
              />
            }
          />
          <Route path="reviews" element={<AdminReviews />} />
        </Routes>
      </Container>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
      />
    </SubPageContainer>
  );
};
