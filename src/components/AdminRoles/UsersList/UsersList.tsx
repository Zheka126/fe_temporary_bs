import {
  AssignButton,
  RemoveButton,
  StyledUsersList,
  UserItem,
  UserItemButtons
} from "./UsersList.styles";

const users = [
  {
    id: 1,
    username: "ion",
    role: "user"
  },
  {
    id: 2,
    username: "costya",
    role: "admin"
  },
  {
    id: 3,
    username: "eugen",
    role: "admin"
  },
  {
    id: 4,
    username: "julian",
    role: "super-admin"
  }
];

export const UsersList = () => {
  return (
    <StyledUsersList>
      {users.map((user) => {
        return (
          <UserItem key={user.id}>
            <span>{user.username}</span>
            <span>{user.role}</span>
            {user.role === "user" ? (
              <UserItemButtons>
                <AssignButton>Assign</AssignButton>
                <RemoveButton>Remove</RemoveButton>
              </UserItemButtons>
            ) : user.role === "admin" ? (
              <UserItemButtons>
                <RemoveButton>Remove</RemoveButton>
              </UserItemButtons>
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
