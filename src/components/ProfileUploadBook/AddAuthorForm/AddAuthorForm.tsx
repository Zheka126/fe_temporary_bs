import { useState } from "react";
import { AddAuthorRequest } from "src/types/author";

import { Button, Loader } from "../..";
import {
  InputContainer,
  StyledErrorMessage,
  StyledInput
} from "../../common/Input.styles";
import { AddAuthorLoaderContainer, AddAuthorsErr } from "./AddAuthorForm.styles";

interface AddAuthorFormProps {
  isAddAuthorsLoading: boolean;
  addAuthorsErr: string;
  addAuthor: (author: AddAuthorRequest) => void;
}

export const AddAuthorForm = ({
  isAddAuthorsLoading,
  addAuthorsErr,
  addAuthor
}: AddAuthorFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onAddAuthor = () => {
    addAuthor({ firstName, lastName });
    setFirstName("");
    setLastName("");
  };
  const isValidFirstName = firstName ? !!/^[A-Za-z]+$/.test(firstName) : true;
  const isValidLastName = lastName ? !!/^[A-Za-z]+$/.test(lastName) : true;
  return (
    <div>
      <h3>Add Author</h3>
      <InputContainer>
        <StyledInput
          id="name"
          name="name"
          type="text"
          placeholder="First Name"
          bgcColor="gray"
          value={firstName}
          isError={!isValidFirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {!isValidFirstName && (
          <StyledErrorMessage>Only latin letters allowed</StyledErrorMessage>
        )}
      </InputContainer>

      <InputContainer>
        <StyledInput
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          bgcColor="gray"
          value={lastName}
          isError={!isValidLastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {!isValidLastName && (
          <StyledErrorMessage>Only latin letters allowed</StyledErrorMessage>
        )}
      </InputContainer>
      {isAddAuthorsLoading ? (
        <AddAuthorLoaderContainer>
          <Loader size="mini" />
        </AddAuthorLoaderContainer>
      ) : addAuthorsErr ? (
        <AddAuthorsErr>{addAuthorsErr} 😥</AddAuthorsErr>
      ) : (
        <Button
          title="Add"
          disabled={
            !firstName || !lastName || !isValidFirstName || !isValidLastName
          }
          onClick={onAddAuthor}
        />
      )}
    </div>
  );
};
