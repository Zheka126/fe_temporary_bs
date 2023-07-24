import { ProfileAssignmentType } from "src/types/profile";
import { getDate } from "src/utils";

import {
  ActionsBtn,
  AssignmentStatus,
  ProAssItem,
  StyledAssignmentsList
} from "./AssignmentsList.styles";

interface AssignmentsListProps {
  profileAssignments: ProfileAssignmentType[];
}

const dateDisplayed = (date: string | null) => {
  if(!date) return '---'
  return getDate(date)
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
            <span>{dateDisplayed(proAss.startDate)}</span>
            <span>{dateDisplayed(proAss.endDate)}</span>
            <AssignmentStatus status={proAss.status}>
              {proAss.status}
            </AssignmentStatus>
            {proAss.status === "REJECTED" ? (
              <span>---</span>
            ) : (
              <ActionsBtn type="button">
                {proAss.status === "ACTIVE"
                  ? "Extend deadline"
                  : "Change time range"}
              </ActionsBtn>
            )}
          </ProAssItem>
        );
      })}
    </StyledAssignmentsList>
  );
};
