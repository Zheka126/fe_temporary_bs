import { Link, Route, Routes } from "react-router-dom";
import { AdminRoles } from "src/components/AdminRoles/AdminRoles";
import { UsersList } from "src/components/AdminRoles/UsersList/UsersList";
import { Container } from "src/components/common/Container.styles";

import { Tabs } from "./styles/AdminTabPage.styles";

const AdminAssignments = () => {
  return <div>Assignments</div>;
};
const AdminReviews = () => {
  return <div>Reviews</div>;
};

export const AdminTabPage = () => {
  return (
    <Container>
      <Tabs>
        <Link to="/admin_tab/roles">Manage Roles</Link>
        <Link to="/admin_tab/assignments">Approve assignments</Link>
        <Link to="/admin_tab/reviews">Delete reviews</Link>
      </Tabs>

      <Routes>
        <Route index path="roles" element={<AdminRoles />} />
        <Route path="assignments" element={<AdminAssignments />} />
        <Route path="reviews" element={<AdminReviews />} />
      </Routes>
    </Container>
  );
};
