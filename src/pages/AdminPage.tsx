import { Route, Routes, useLocation } from "react-router-dom";
import { AdminAssignments } from "src/components/AdminAssignments/AdminAssignments";
import { AdminRoles } from "src/components/AdminRoles/AdminRoles";
import { Container } from "src/components/common/Container.styles";

import {
  AdminProfilePageContainer,
  StyledLink,
  Tabs
} from "./styles/common/common.styles";

const AdminReviews = () => {
  return <div>Reviews</div>;
};

const tabLinks = [
  { path: "/admin/roles", text: "Manage Roles" },
  { path: "/admin/assignments", text: "Approve assignments" },
  { path: "/admin/reviews", text: "Delete reviews" }
];

export const AdminTabPage = () => {
  const location = useLocation();

  return (
    <AdminProfilePageContainer>
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
      </Container>

      <Routes>
        <Route index path="roles" element={<AdminRoles />} />
        <Route path="assignments" element={<AdminAssignments />} />
        <Route path="reviews" element={<AdminReviews />} />
      </Routes>
    </AdminProfilePageContainer>
  );
};
