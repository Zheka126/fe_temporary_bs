import { RolesPanel } from "./AdminRoles.styles";
import { UsersList } from "./UsersList/UsersList";

export const AdminRoles = () => {
  return (
    <div>
      <RolesPanel>
        <li>Username</li>
        <li>Roles</li>

        <li>Actions</li>
      </RolesPanel>
      <UsersList />
    </div>
  );
};
