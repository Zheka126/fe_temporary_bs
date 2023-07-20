import { ProfileAssignmentType } from "src/types/profile";

import { ProAssItem, StyledAssignmentsList } from "./AssignmentsList.styles";

interface AssignmentsListProps {
  profileAssignments: ProfileAssignmentType[];
}

export const AssignmentsList = ({
  profileAssignments
}: AssignmentsListProps) => {
  return (
    <StyledAssignmentsList>
      {profileAssignments.map((proAss) => {
        return (
          <ProAssItem key={proAss.id}>
            <span>{proAss.title}</span>
            <span>
              {proAss.status === "PENDING" || proAss.status === "REJECTED"
                ? "---"
                : "some time"}
            </span>
            <span>
              {proAss.status === "PENDING" || proAss.status === "REJECTED"
                ? "---"
                : "some time"}
            </span>
            <span>{proAss.status}</span>
            {proAss.status === "REJECTED" ? (
              <span>---</span>
            ) : (
              <button type="button">
                {proAss.status === "ACTIVE"
                  ? "Extend deadline"
                  : proAss.status === "REJECTED"
                  ? "---"
                  : "Change time range"}
              </button>
            )}
          </ProAssItem>
        );
      })}
    </StyledAssignmentsList>
  );
};
