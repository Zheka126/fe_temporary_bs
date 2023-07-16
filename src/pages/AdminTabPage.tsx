import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AdminRoles } from "src/components/AdminRoles/AdminRoles";
import { Container } from "src/components/common/Container.styles";
import { Pagination } from "src/components/Pagination/Pagination";
import { useAppSelector } from "src/redux/hooks";

import {
  AdminTabPageContainer,
  StyledLink,
  Tabs
} from "./styles/AdminTabPage.styles";

const AdminAssignments = () => {
  return <div>Assignments</div>;
};
const AdminReviews = () => {
  return <div>Reviews</div>;
};

const tabLinks = [
  {
    path: "/admin_tab/roles",
    text: "Manage Roles"
  },
  {
    path: "/admin_tab/assignments",
    text: "Approve assignments"
  },
  {
    path: "/admin_tab/reviews",
    text: "Delete reviews"
  }
];

export const AdminTabPage = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const { roles, totalRoleRecords } = useAppSelector(
    ({ role }) => ({
      roles: role.roles,
      totalRoleRecords: role.totalRecords,
    })
  );

  const assignments = 25;
  const reviews = 46;

  const currentlyViewedPage =
    location.pathname === "/admin_tab/roles"
      ? "roles"
      : location.pathname === "/admin_tab/assignments"
      ? "assignments"
      : "reviews";

  const pageCount = Math.ceil(
    (currentlyViewedPage === "roles"
      ? totalRoleRecords
      : currentlyViewedPage === "assignments"
      ? assignments
      : reviews) / 12
  );
// test
  return (
    <AdminTabPageContainer>
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
    </AdminTabPageContainer>
  );
};
