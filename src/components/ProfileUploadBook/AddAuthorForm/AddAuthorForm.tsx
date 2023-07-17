import { useState } from "react";
import { AddAuthorRequest } from "src/types/author";

import { Button } from "../..";
import { InputContainer, StyledErrorMessage, StyledInput } from "../../common/Input.styles";

interface AddAuthorFormProps {
  addAuthor: (author: AddAuthorRequest) => void;
}

export const AddAuthorForm = ({ addAuthor }: AddAuthorFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onAddAuthor = () => {
    addAuthor({ firstName, lastName });
    setFirstName("");
    setLastName("");
  };
  const isValidFirstName = firstName ? !!(/^[A-Za-z]+$/.test(firstName)) : true;
  const isValidLastName = lastName ? !!(/^[A-Za-z]+$/.test(lastName)): true;
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
      <Button
        title="Add"
        disabled={!firstName || !lastName || !isValidFirstName || !isValidLastName}
        onClick={onAddAuthor}
      />
    </div>
  );
};
