import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getProfileAssignmentsThunk } from "src/redux/slices/profileSlice";

import { Pagination } from "..";
import { Container } from "../common/Container.styles";
import { AssignmentsList } from "./AssignmentsList/AssignmentsList";
import {
  AssignmentsPanel,
  ProfileAssignmentsContainer
} from "./ProfileAssignments.styles";

export const ProfileAssignments = () => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { profileAssignments, totalProAssRecord } = useAppSelector(
    ({ profile }) => ({
      profileAssignments: profile.assignments,
      totalProAssRecord: profile.totalAssignmentsRecords
    })
  );

  useEffect(() => {
    try {
      dispatch(getProfileAssignmentsThunk(currentPage)).unwrap();
    } catch (err) {
      console.log(err);
    }
  }, [currentPage]);

  return (
    <ProfileAssignmentsContainer>
      <Container>
        <AssignmentsPanel>
          <li>Book</li>
          <li>Start date</li>
          <li>End date</li>
          <li>Status</li>
          <li>Actions</li>
        </AssignmentsPanel>

        <AssignmentsList profileAssignments={profileAssignments} />
      </Container>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={Math.ceil(totalProAssRecord / 12)}
      />
    </ProfileAssignmentsContainer>
  );
};
