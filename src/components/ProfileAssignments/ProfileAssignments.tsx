import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getProfileAssignmentsThunk } from "src/redux/slices/profileSlice";

import { Loader, Pagination } from "..";
import { Container } from "../common/Container.styles";
import { AssignmentsList } from "./AssignmentsList/AssignmentsList";
import {
  AssignmentsPanel,
  ProAssLoadingContainer,
  ProfileAssignmentsContainer,
  ProNoAssignmentsOrErr
} from "./ProfileAssignments.styles";

export const ProfileAssignments = () => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [isProAssLoading, setProAssLoading] = useState(true);
  const [proAssErr, setProAssErr] = useState("");

  const { profileAssignments, totalProAssRecord } = useAppSelector(
    ({ profile }) => ({
      profileAssignments: profile.assignments,
      totalProAssRecord: profile.totalAssignmentsRecords
    })
  );

  useEffect(() => {
    (async () => {
      try {
        setProAssLoading(true);
        await dispatch(getProfileAssignmentsThunk(currentPage)).unwrap();
      } catch (err: any) {
        setProAssErr(err.message);
      } finally {
        setProAssLoading(false);
      }
    })();
  }, [currentPage]);

  return (
    <ProfileAssignmentsContainer>
      <Container>
        {isProAssLoading ? (
          <ProAssLoadingContainer>
            <Loader size="big" />
          </ProAssLoadingContainer>
        ) : proAssErr ? (
          <ProNoAssignmentsOrErr>{proAssErr} 🙁</ProNoAssignmentsOrErr>
        ) : profileAssignments.length ? (
          <>
            <AssignmentsPanel>
              <li>Book</li>
              <li>Start date</li>
              <li>End date</li>
              <li>Status</li>
              <li>Actions</li>
            </AssignmentsPanel>
            <AssignmentsList profileAssignments={profileAssignments} />
          </>
        ) : (
          <ProNoAssignmentsOrErr>No assignments yet</ProNoAssignmentsOrErr>
        )}
      </Container>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={Math.ceil(totalProAssRecord / 12)}
      />
    </ProfileAssignmentsContainer>
  );
};
