import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Container } from "src/components/common/Container.styles";
import { ProfileUploadBook } from "src/components/ProfileUploadBook/ProfileUploadBook";

import { StyledLink, SubPageContainer, Tabs } from './styles/common/common.styles';

const tabLinks = [
  { path: "/profile", text: "My Profile" },
  { path: "/profile/assignments", text: "My assignments" },
  { path: "/profile/books", text: "My books" },
  { path: "/profile/wantedBooks", text: "Wanted books" },
  { path: "/profile/upload-book", text: "Upload book" }
];

export const ProfilePage = () => {
    const location = useLocation()

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
          <Route path="upload-book" element={<ProfileUploadBook />} />
        </Routes>
      </Container>
    </SubPageContainer>
  );
};
