import { Loader } from "src/components/common/Loader/Loader";
import { AvailableRoles, Role } from "src/types/roles";

import {
  AssignButton,
  ButtonLoaderWrapper,
  RemoveButton,
  StyledUsersList,
  UserItem
} from "./UsersList.styles";

interface UsersListProps {
  roles: Role[];
  switchRoleLoadingId: string;
  openModal: (id: string, role: AvailableRoles) => void
  // updateRole: (id: string, type: 'toAdmin' | 'toUser') => void;
}

export const UsersList = ({
  roles,
  switchRoleLoadingId,
  openModal,
  // updateRole
}: UsersListProps) => {
  return (
    <StyledUsersList>
      {roles.map(({ id, username, role }) => {
        return (
          <UserItem key={id}>
            <span>{username}</span>
            <span>{role}</span>
            {switchRoleLoadingId && switchRoleLoadingId === id ? (
              <ButtonLoaderWrapper>
                <Loader size="mini" />
              </ButtonLoaderWrapper>
            ) : role === "User" ? (
              <AssignButton
                disabled={!!switchRoleLoadingId}
                onClick={() => openModal(id, 'Admin')}
              >
                Assign
              </AssignButton>
            ) : role === "Admin" ? (
              <RemoveButton
                disabled={!!switchRoleLoadingId}
                onClick={() => openModal(id, 'User')}
              >
                Remove
              </RemoveButton>
            ) : (
              <p>
                super-admin role cannot be removed, please contact technical
                support
              </p>
            )}
          </UserItem>
        );
      })}
    </StyledUsersList>
  );
};
