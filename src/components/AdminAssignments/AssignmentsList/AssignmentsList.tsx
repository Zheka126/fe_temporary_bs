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

export const AssignmentsList = ({
  assignments,
  isHandleAssIdLoading,
  onApproveRejectAssignment
}: AssignmentsListProps) => {
  return (
    <StyledAssignmentsList>
      {assignments.map((assignment) => {
        return (
          <AssignmentItem key={assignment.id}>
            <span>{assignment.bookId}</span>
            <span>{assignment.userId}</span>
            <span>{assignment.requestDate}</span>
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
                          type: "reject"
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
