import { AssignmentType } from "src/types/assignments";

import {
  AssignmentItem,
  StyledAssignmentsList
} from "./AssignmentsList.styles";

interface AssignmentsListProps {
  assignments: AssignmentType[];
}

export const AssignmentsList = ({ assignments }: AssignmentsListProps) => {
  return (
    <StyledAssignmentsList>
      {assignments.map((assignment) => {
        return (
          <AssignmentItem key={assignment.id}>
            <span>{assignment.bookId}</span>
            <span>{assignment.userId}</span>
            <span>{assignment.requestDate}</span>
            <span>{assignment.startDate}</span>
            <span>{assignment.endDate}</span>
            <span>
              <button type='button'>reject</button>
              <button type='button'>approve</button>
            </span>
          </AssignmentItem>
        );
      })}
    </StyledAssignmentsList>
  );
};
