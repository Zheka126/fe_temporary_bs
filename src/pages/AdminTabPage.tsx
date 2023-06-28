import { Link } from "react-router-dom"
import { Container } from "src/components/common/Container.styles"
import { RolesPanel, Tabs, UserItem, UserItemButtons, UsersList } from "./styles/AdminTabPage.styles"

const users = [
  {
    username: 'ion',
    role: 'user'
  },
  {
    username: 'costya',
    role: 'admin'
  },
  {
    username: 'eugen',
    role: 'admin'
  },
  {
    username: 'julian',
    role: 'super-admin'
  },
]

export const AdminTabPage = () => {
  return (
    <Container>
      <Tabs>
        <Link to='#'>Manage Roles</Link>
        <Link to='#'>Approve assignments</Link>
        <Link to='#'>Delete reviews</Link>
      </Tabs>

      <RolesPanel>
        <li>Username</li>
        <li>Roles</li>
        <li>Actions</li>
      </RolesPanel>

      <UsersList>
        {
          users.map(user => {
            return (
              <UserItem>
                <span>{user.username}</span>
                <span>{user.role}</span>
                {
                  user.role === 'user'
                  ?
                  <UserItemButtons>
                    <button>Assign</button>
                    <button>Remove</button>
                  </UserItemButtons>
                  :
                  user.role === 'admin'
                  ?
                  <UserItemButtons>
                    <button>Remove</button>
                  </UserItemButtons>
                  :
                  <p>super-admin role cannot be removed, please contact technical support</p>
                }
              </UserItem>
            )
          })
        }
      </UsersList>
    </Container>
  )
}
