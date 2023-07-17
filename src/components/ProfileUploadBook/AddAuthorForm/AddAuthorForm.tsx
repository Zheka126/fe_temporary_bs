import { useState } from "react";
import { AddAuthorRequest } from "src/types/author";

import { Button } from "../..";
import { InputContainer, StyledInput } from "../../common/Input.styles";

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
          onChange={(e) => setFirstName(e.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <StyledInput
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          bgcColor="gray"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </InputContainer>
      <Button
        title="Add"
        disabled={!firstName || !lastName}
        onClick={onAddAuthor}
      />
    </div>
  );
};
