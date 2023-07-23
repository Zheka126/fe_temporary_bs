import { Route, Routes, useLocation } from "react-router-dom";
import { Container } from "src/components/common/Container.styles";
import { ProfileAssignments } from "src/components/ProfileAssignments/ProfileAssignments";
import { ProfileMyBooks } from "src/components/ProfileMyBooks/ProfileMyBooks";
import { ProfileUploadBook } from "src/components/ProfileUploadBook/ProfileUploadBook";

import {
  AdminProfilePageContainer,
  StyledLink,
  Tabs
} from "./styles/common/common.styles";

const tabLinks = [
  { path: "/profile", text: "My Profile" },
  { path: "/profile/assignments", text: "My assignments" },
  { path: "/profile/my-books", text: "My books" },
  { path: "/profile/wantedBooks", text: "Wanted books" },
  { path: "/profile/upload-book", text: "Upload book" }
];

export const ProfilePage = () => {
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
        <Route path="assignments" element={<ProfileAssignments />} />
        <Route path="my-books" element={<ProfileMyBooks />} />
        <Route path="upload-book" element={<ProfileUploadBook />} />
      </Routes>
    </AdminProfilePageContainer>
  );
};
