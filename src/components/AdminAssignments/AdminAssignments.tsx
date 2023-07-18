import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  getAssignmentsThunk,
  onHandleAssignmentThunk
} from "src/redux/slices/assignmentsSlice";
import {
  ApproveRejectAssignmentRequest,
  AssignmentType
} from "src/types/assignments";

import { Loader } from "..";
import {
  AssignmentsLoaderContainer,
  AssignmentsPanel,
  EmptyAssignmentsOrErr
} from "./AdminAssignments.styles";
import { AssignmentsList } from "./AssignmentsList/AssignmentsList";

interface AdminAssignmentsProps {
  assignments: AssignmentType[];
  currentPage: number;
}

export const AdminAssignments = ({
  assignments,
  currentPage
}: AdminAssignmentsProps) => {
  const dispatch = useAppDispatch();

  const userRole = useAppSelector(({ auth }) => auth.user?.role);

  const [isAssignmentLoading, setAssignmentLoading] = useState(true);
  const [assignmentsErr, setAssignmentsErr] = useState("");

  const [isHandleAssIdLoading, setHandleAssIdLoading] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setAssignmentLoading(true);
        if (userRole === "SuperAdmin" || userRole === "Admin") {
          await dispatch(getAssignmentsThunk(currentPage)).unwrap();
        } else {
          throw Error("The page is available for super admin and admin only");
        }
      } catch (err: any) {
        setAssignmentsErr(err.message);
      } finally {
        setAssignmentLoading(false);
      }
    })();
  }, []);

  const onApproveRejectAssignment = async (
    handleAssPayload: ApproveRejectAssignmentRequest
  ) => {
    try {
      setHandleAssIdLoading(handleAssPayload.assId);
      await dispatch(onHandleAssignmentThunk(handleAssPayload));
    } catch (err: any) {
      setAssignmentsErr(err.message);
    } finally {
      setHandleAssIdLoading("");
    }
  };

  return (
    <div>
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
          {assignments.length ? (
            <AssignmentsList
              assignments={assignments}
              onApproveRejectAssignment={onApproveRejectAssignment}
              isHandleAssIdLoading={isHandleAssIdLoading}
            />
          ) : (
            <EmptyAssignmentsOrErr>No assignments yet 😢</EmptyAssignmentsOrErr>
          )}
        </>
      )}
    </div>
  );
};
