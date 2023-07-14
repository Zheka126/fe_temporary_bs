import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { getProfileItems } from 'src/api/requests/profile';
import { AdminRoles } from 'src/components/AdminRoles/AdminRoles';
import { Container } from 'src/components/common/Container.styles';
import { Pagination } from 'src/components/Pagination/Pagination';
import { useAppSelector } from 'src/redux/hooks';
import { getTotalPages } from 'src/utils';

import {
  AdminPageContainer,
  StyledLink,
  Tabs,
} from './styles/AdminPage.styles';

const AdminAssignments = () => {
  return <div>Assignments</div>;
};
const AdminReviews = () => {
  return <div>Reviews</div>;
};

const tabLinks = [
  { path: '/profile/profile', text: 'My Profile' },
  { path: '/profile/books', text: 'My books' },
  { path: '/profile/assignments', text: 'My assignments' },
  { path: '/profile/wantedBooks', text: 'Wanted books' },
];

export const ProfilePage = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const { roles, totalRoleRecords } = useAppSelector(({ role }) => ({
    roles: role.roles,
    totalRoleRecords: role.totalRecords,
  }));

  const assignments = 25;
  const reviews = 46;

  const currentlyViewedPage =
    location.pathname === '/admin/roles'
      ? 'roles'
      : location.pathname === '/admin/assignments'
      ? 'assignments'
      : 'reviews';

  const pageCount = getTotalPages(
    currentlyViewedPage === 'roles'
      ? totalRoleRecords
      : currentlyViewedPage === 'assignments'
      ? assignments
      : reviews,
    12
  );
  useEffect(() => {
    (async () => {
      try {
        const { status: booksStatus, data: booksData } = await getProfileItems('books');
        console.log('booksStatus: ', booksStatus);
        const { status: assignmentsStatus, data: assignmentsData } = await getProfileItems('assignments');
        console.log('assignmentsStatus: ', assignmentsStatus);
        const { status: wantedBooksStatus, data: wantedBooksData } = await getProfileItems('wantedbooks');
        console.log('wantedBooksStatus: ', wantedBooksStatus);
      } catch (error) {
        console.log('error: ', error);
      }
    })();
  }, []);
  

  return (
    <AdminPageContainer>
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
          <Route path="assignments" element={<AdminAssignments />} />
          <Route path="reviews" element={<AdminReviews />} />
        </Routes>
      </Container>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
      />
    </AdminPageContainer>
  );
};
