import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getRolesThunk, updateRoleThunk } from "src/redux/slices/rolesSlice";
import { AvailableRoles, UpdateRoleRequest } from "src/types/roles";

import { Pagination } from "..";
import { Container } from "../common/Container.styles";
import { Loader } from "../common/Loader/Loader";
import { ConfirmModal } from "../common/Modal/ConfirmModal";
import {
  AdminRolesContainer,
  RequestError,
  RolesLoaderContainer,
  RolesPanel
} from "./AdminRoles.styles";
import { UsersList } from "./UsersList/UsersList";

export const AdminRoles = () => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [isAllRolesLoading, setAllRolesLoading] = useState(true);
  const [switchRoleLoadingId, setSwitchRoleLoadingId] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const [updateRoleData, setUpdateRoleData] =
    useState<null | UpdateRoleRequest>(null);

  const { userRole, roles, totalRoleRecords } = useAppSelector(
    ({ auth, role }) => ({
      userRole: auth.user?.role,
      roles: role.roles,
      totalRoleRecords: role.totalRecords
    })
  );

  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setAllRolesLoading(true);
        if (userRole === "SuperAdmin") {
          await dispatch(getRolesThunk(currentPage)).unwrap();
        } else {
          throw Error("The page is available for super admin only");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setAllRolesLoading(false);
      }
    })();
  }, [currentPage]);

  const openModal = (userId: string, role: AvailableRoles) => {
    setModalOpen(true);
    setUpdateRoleData({ userId, role });
  };

  const closeModal = () => {
    setModalOpen(false);
    setUpdateRoleData(null);
  };

  const updateRole = async () => {
    try {
      const { userId, role } = updateRoleData!;
      setSwitchRoleLoadingId(userId);
      closeModal();
      await dispatch(updateRoleThunk({ userId, role })).unwrap();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSwitchRoleLoadingId("");
    }
  };

  if (error) {
    return <RequestError>{error}😢</RequestError>;
  }

  return (
    <AdminRolesContainer>
      <Container>
        {!isAllRolesLoading && roles.length ? (
          <>
            <RolesPanel>
              <li>Username</li>
              <li>Roles</li>
              <li>Actions</li>
            </RolesPanel>
            <UsersList
              roles={roles}
              switchRoleLoadingId={switchRoleLoadingId}
              openModal={openModal}
            />
          </>
        ) : (
          <RolesLoaderContainer>
            <Loader size="big" />
          </RolesLoaderContainer>
        )}
        <ConfirmModal
          title="Are you sure you want to reassign the role for this user?"
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={updateRole}
        />
      </Container>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={Math.ceil(totalRoleRecords / 12)}
      />
    </AdminRolesContainer>
  );
};
