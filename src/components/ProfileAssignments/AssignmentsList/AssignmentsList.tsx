import { ProfileAssignmentType } from "src/types/profile";

import {
  ActionsBtn,
  AssignmentStatus,
  ProAssItem,
  StyledAssignmentsList
} from "./AssignmentsList.styles";

interface AssignmentsListProps {
  profileAssignments: ProfileAssignmentType[];
}

export const AssignmentsList = ({
  profileAssignments
}: AssignmentsListProps) => {
  return (
    <StyledAssignmentsList>
      {profileAssignments.map((proAss) => {
        const dateDisplayed =
          proAss.status === "PENDING" || proAss.status === "REJECTED"
            ? "---"
            : "some time";
        return (
          <ProAssItem key={proAss.id}>
            <span>{proAss.title}</span>
            <span>{dateDisplayed}</span>
            <span>{dateDisplayed}</span>
            <AssignmentStatus status={proAss.status}>
              {proAss.status}
            </AssignmentStatus>
            {proAss.status === "REJECTED" ? (
              <span>---</span>
            ) : (
              <ActionsBtn type="button">
                {proAss.status === "ACTIVE"
                  ? "Extend deadline"
                  : proAss.status === "REJECTED"
                  ? "---"
                  : "Change time range"}
              </ActionsBtn>
            )}
          </ProAssItem>
        );
      })}
    </StyledAssignmentsList>
  );
};
