import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getAssignmentsThunk } from "src/redux/slices/assignmentsSlice";
import { AssignmentType } from "src/types/assignments";

import { Loader } from "..";
import {
  AssignmentsErr,
  AssignmentsLoaderContainer,
  AssignmentsPanel
} from "./AdminAssignments.styles";
import { AssignmentsList } from "./AssignmentsList/AssignmentsList";

interface AdminAssignmentsProps {
  assignments: AssignmentType[];
}

export const AdminAssignments = ({ assignments }: AdminAssignmentsProps) => {
  const dispatch = useAppDispatch();

  const [isAssignmentLoading, setAssignmentLoading] = useState(true);
  const [assignmentsErr, setAssignmentsErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setAssignmentLoading(true);
        // await dispatch(getAssignmentsThunk()).unwrap();
      } catch (err: any) {
        setAssignmentsErr(err.message);
      } finally {
        setAssignmentLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      {isAssignmentLoading ? (
        <AssignmentsLoaderContainer>
          <Loader size="big" />
        </AssignmentsLoaderContainer>
      ) : assignmentsErr ? (
        <AssignmentsErr>{assignmentsErr} 😢</AssignmentsErr>
      ) : (
        <>
          <AssignmentsPanel>
            <li>Book</li>
            <li>Requested By</li>
            <li>Requested At</li>
            <li>Assignment Start Date</li>
            <li>Assignment End Date</li>
            <li>Actions</li>
          </AssignmentsPanel>
          {
            assignments.length
            ?
            <AssignmentsList
            assignments={assignments}
            // switchRoleLoadingId={switchRoleLoadingId}
            // openModal={openModal}
            />
            :
            <div>no assignments yet</div>
          }
        </>
      )}
    </div>
  );
};
