import { Loader } from "src/components";
import {
  ApproveRejectAssignmentRequest,
  AssignmentType
} from "src/types/assignments";

import {
  ApproveRejectBtn,
  AssignmentItem,
  AssignmentsButtonsContainer,
  StyledAssignmentsList
} from "./AssignmentsList.styles";

interface AssignmentsListProps {
  assignments: AssignmentType[];
  isHandleAssIdLoading: string;
  onApproveRejectAssignment: (
    handleAssPayload: ApproveRejectAssignmentRequest
  ) => void;
}

const getDate = (date: string) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

export const AssignmentsList = ({
  assignments,
  isHandleAssIdLoading,
  onApproveRejectAssignment
}: AssignmentsListProps) => {
  return (
    <StyledAssignmentsList>
      {assignments.map((assignment) => {
        const requestDate = getDate(assignment.requestDate)
        
        return (
          <AssignmentItem key={assignment.id}>
            <span>{assignment.bookTitile}</span>
            <span>{assignment.username}</span>
            <span>{requestDate}</span>
            {/* <span>{assignment.startDate}</span> */}
            {/* <span>{assignment.endDate}</span> */}
            <AssignmentsButtonsContainer>
              {isHandleAssIdLoading &&
              isHandleAssIdLoading === assignment.id ? (
                <Loader size="mini" />
              ) : (
                ["Reject", "Approve"].map((btn) => {
                  return (
                    <ApproveRejectBtn
                      key={btn}
                      type="button"
                      disabled={!!isHandleAssIdLoading}
                      btnType={btn as "Reject" | "Approve"}
                      onClick={() =>
                        onApproveRejectAssignment({
                          assId: assignment.id,
                          type: btn === "Reject" ? "reject" : "approve"
                        })
                      }
                    >
                      {btn}
                    </ApproveRejectBtn>
                  );
                })
              )}
            </AssignmentsButtonsContainer>
          </AssignmentItem>
        );
      })}
    </StyledAssignmentsList>
  );
};
