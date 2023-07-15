import { useEffect, useState } from "react";

import { AssignmentsPanel } from "./AdminAssignments.styles";
import { AssignmentsList } from "./AssignmentsList/AssignmentsList";
import { useAppDispatch } from "src/redux/hooks";
import { Loader } from "..";

export const AdminAssignments = () => {
  const dispatch = useAppDispatch();

  const [isAssignmentLoading, setAssignmentLoading] = useState(true);
  const [assignmentsErr, setAssignmentsErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setAssignmentLoading(true);
        // await dispatch(getAssignmentsThunk()).unwrap()
      } catch (err) {
        setAssignmentsErr(err.message);
      } finally {
        setAssignmentLoading(false);
      }
    })();
  }, []);
  return (
    <div>
      {isAssignmentLoading ? (
        <Loader size="big" />
      ) : assignmentsErr ? (
        <div>{assignmentsErr}</div>
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
          <AssignmentsList
          // roles={roles}
          // switchRoleLoadingId={switchRoleLoadingId}
          // openModal={openModal}
          />
        </>
      )}
    </div>
  );
};
