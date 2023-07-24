import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  getAssignmentsThunk,
  onHandleAssignmentThunk,
} from 'src/redux/slices/assignmentsSlice';
import { ApproveRejectAssignmentRequest } from 'src/types/assignments';

import { Loader, Pagination } from '..';
import { Container } from '../common/Container.styles';
import {
  AssignmentsLoaderContainer,
  AssignmentsPanel,
  AssignmentsRolesContainer,
  EmptyAssignmentsOrErr,
} from './AdminAssignments.styles';
import { AssignmentsList } from './AssignmentsList/AssignmentsList';

export const AdminAssignments = () => {
  const dispatch = useAppDispatch();

  const { userRole, assignmentsArr, totalAssignmentsRecords } = useAppSelector(
    ({ auth, assignments }) => ({
      userRole: auth.user?.role,
      assignmentsArr: assignments.assignments,
      totalAssignmentsRecords: assignments.totalRecords,
    })
  );

  const [currentPage, setCurrentPage] = useState(1);

  const [isAssignmentLoading, setAssignmentLoading] = useState(true);
  const [assignmentsErr, setAssignmentsErr] = useState('');

  const [isHandleAssIdLoading, setHandleAssIdLoading] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setAssignmentLoading(true);
        if (userRole === 'SuperAdmin' || userRole === 'Admin') {
          await dispatch(getAssignmentsThunk(currentPage)).unwrap();
        }
      } catch (err: any) {
        setAssignmentsErr(err.message);
      } finally {
        setAssignmentLoading(false);
      }
    })();
  }, [currentPage, userRole]);

  const onApproveRejectAssignment = async (
    handleAssPayload: ApproveRejectAssignmentRequest
  ) => {
    try {
      setHandleAssIdLoading(handleAssPayload.assId);
      await dispatch(onHandleAssignmentThunk(handleAssPayload));
    } catch (err: any) {
      setAssignmentsErr(err.message);
    } finally {
      setHandleAssIdLoading('');
    }
  };

  if (userRole !== 'SuperAdmin' && userRole !== 'Admin') {
    return (
      <EmptyAssignmentsOrErr>
        The page is available for super admin and admin only 😢
      </EmptyAssignmentsOrErr>
    );
  }

  return (
    <AssignmentsRolesContainer>
      <Container>
        {isAssignmentLoading ? (
          <AssignmentsLoaderContainer>
            <Loader size="big" />
          </AssignmentsLoaderContainer>
        ) : assignmentsErr ? (
          <EmptyAssignmentsOrErr>{assignmentsErr} 😢</EmptyAssignmentsOrErr>
        ) : (
          <>
            <AssignmentsPanel>
              <li>Book</li>
              <li>Requested By</li>
              <li>Requested At</li>
              {/* <li>Start Date</li> */}
              {/* <li>End Date</li> */}
              <li>Actions</li>
            </AssignmentsPanel>
            {assignmentsArr.length ? (
              <AssignmentsList
                assignments={assignmentsArr}
                onApproveRejectAssignment={onApproveRejectAssignment}
                isHandleAssIdLoading={isHandleAssIdLoading}
              />
            ) : (
              <EmptyAssignmentsOrErr>
                No assignments yet 😢
              </EmptyAssignmentsOrErr>
            )}
          </>
        )}
      </Container>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={Math.ceil(totalAssignmentsRecords / 12)}
      />
    </AssignmentsRolesContainer>
  );
};
