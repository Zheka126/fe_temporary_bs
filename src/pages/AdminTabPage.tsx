import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AdminAssignments } from "src/components/AdminAssignments/AdminAssignments";
import { AdminRoles } from "src/components/AdminRoles/AdminRoles";
import { Container } from "src/components/common/Container.styles";
import { Pagination } from "src/components/Pagination/Pagination";
import { useAppSelector } from "src/redux/hooks";
import { AssignmentType } from "src/types/assignments";

import {
  AdminTabPageContainer,
  StyledLink,
  Tabs
} from "./styles/AdminTabPage.styles";

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

  const { roles, totalRoleRecords, assignmentsArr } = useAppSelector(
    ({ role, assignments, books }) => ({
      books: books.books, 
      roles: role.roles,
      totalRoleRecords: role.totalRecords,
      assignmentsArr: assignments.assignments
    })
  );

  const books = [
    {
      id: "1",
      title: 'book1'
    },
    {
      id: "2",
      title: 'book2'
    },
    {
      id: "3",
      title: 'book3'
    },
    {
      id: "4",
      title: 'book4'
    },
    {
      id: "5",
      title: 'book5'
    }
  ]

  const users = [
    {
      id: "1",
      username: 'username1'
    },
    {
      id: "2",
      username: 'username2'
    },
    {
      id: "3",
      username: 'username3'
    },
    {
      id: "4",
      username: 'username4'
    },
    {
      id: "5",
      username: 'username5'
    }
  ]
  const assignmentsArray: AssignmentType[] = [
    {
      id: "1",
      bookId: "1",
      userId: "1",
      requestDate: "1999-11-26",
      startDate: "1999-11-26",
      endDate: "1999-11-26",
      status: "PENDING"
    },
    {
      id: "2",
      bookId: "2",
      userId: "2",
      requestDate: "1999-11-26",
      startDate: "1999-11-26",
      endDate: "1999-11-26",
      status: "PENDING"
    },
    {
      id: "3",
      bookId: "3",
      userId: "3",
      requestDate: "1999-11-26",
      startDate: "1999-11-26",
      endDate: "1999-11-26",
      status: "PENDING"
    },
    {
      id: "4",
      bookId: "4",
      userId: "4",
      requestDate: "1999-11-26",
      startDate: "1999-11-26",
      endDate: "1999-11-26",
      status: "PENDING"
    },
    {
      id: "5",
      bookId: "5",
      userId: "5",
      requestDate: "1999-11-26",
      startDate: "1999-11-26",
      endDate: "1999-11-26",
      status: "PENDING"
    }
  ];
const assignments = assignmentsArray.map((assign) => ({
  ...assign,
  bookId: books.find((book) => book.id === assign.bookId)?.title,
  userId: users.find((role) => role.id === assign.userId)?.username
}));
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
      ? assignments.length
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
          <Route
            path="assignments"
            element={<AdminAssignments assignments={assignments} />}
          />
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
