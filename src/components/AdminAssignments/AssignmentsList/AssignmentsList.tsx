import { Loader } from "src/components";
import {
  ApproveRejectAssignmentRequest,
  AssignmentType
} from "src/types/assignments";
import { getDate } from 'src/utils';

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
