import { useState } from 'react';
import Modal from 'react-modal';
import { StyledParagraph } from '../LoginForm/LoginForm.styles';
import { ButtonsContainer } from '../SignupForm/SignupForm.styles';
import { Button } from '../common/Button/Button';
import { InputContainer } from '../common/common.styles';
import {
  BookCoverSection,
  BookDetailItem,
  BookDetailsContainer,
  BookDetailsSection,
  BookGenre,
  CancelBtn,
  ConfirmBtn,
  Details,
  EditInput,
  ModalButtonsContainer,
  ModalTitle,
  StyledModalContent,
  modalStyles,
} from './BookDetails.styles';

interface BookDetailsProps {
  bookDetails: {
    img: string;
    title: string;
    author: string;
    genres: string[];
    description: string;
    uploadedBy: string;
    publicationDate: string;
    language: string;
    availability: string;
  };
}

const createDetail = (text: string, value: string | JSX.Element[]) => {
  return (
    <BookDetailItem>
      <p>{text}</p>
      <span>{value}</span>
    </BookDetailItem>
  );
};

const editModalContent = () => {
  return (
    <StyledModalContent>
      <div>
        <InputContainer>
          <label htmlFor="author">Edit author</label>
          <EditInput id="author" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="genres">Edit genres</label>
          <EditInput id="genres" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="description">Edit description</label>
          <EditInput id="description" />
        </InputContainer>
      </div>
      <div>
        <InputContainer>
          <label htmlFor="uploadedBy">Edit uploaded by</label>
          <EditInput id="uploadedBy" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="publicationDate">Edit publication date</label>
          <EditInput id="publicationDate" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="language">Edit language</label>
          <EditInput id="language" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="availability">Edit availability</label>
          <EditInput id="availability" />
        </InputContainer>
      </div>
    </StyledModalContent>
  );
};

const deleteModalContent = () => {
  return (
    <>
      <StyledParagraph>
        Are you sure you want to delete this book?
      </StyledParagraph>
    </>
  );
};

export const BookDetails = ({ bookDetails }: BookDetailsProps) => {
  const {
    img,
    title,
    author,
    genres,
    uploadedBy,
    publicationDate,
    language,
    description,
    availability,
  } = bookDetails;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const genreElements = genres.map((genre) => (
    <BookGenre key={genre}>{genre}</BookGenre>
  ));

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
    setModalTitle('Confirm deletion');
  };

  const handleEdit = () => {
    setIsModalOpen(true);
    setModalTitle(`Edit book "${title}"`);
  };

  const handleConfirm = () => {
    // should do something more 
    setIsModalOpen(false);
  };

  return (
    <BookDetailsContainer>
      <BookCoverSection>
        <img src={img} alt="book cover" />
      </BookCoverSection>
      <BookDetailsSection>
        <h1>{title}</h1>
        <Details>
          <div>
            {createDetail('Author', author)}
            {createDetail('Genres', genreElements)}
            {createDetail('Description', description)}
          </div>
          <div>
            {createDetail('Uploaded by', uploadedBy)}
            {createDetail('Publication Date', publicationDate)}
            {createDetail('Language', language)}
            {createDetail('Availability', availability)}
          </div>
        </Details>
        <ButtonsContainer>
          <Button title="Edit" onClick={handleEdit} />
          <Button title="Delete" onClick={handleDelete} />
        </ButtonsContainer>
      </BookDetailsSection>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel={modalTitle}
      >
        <ModalTitle>{modalTitle}</ModalTitle>
        {editModalContent()}
        {/* {deleteModalContent()} */}
        <ModalButtonsContainer>
          <ConfirmBtn title="Confirm" onClick={handleConfirm} />
          <CancelBtn title="Cancel" onClick={closeModal} />
        </ModalButtonsContainer>
      </Modal>
    </BookDetailsContainer>
  );
};
