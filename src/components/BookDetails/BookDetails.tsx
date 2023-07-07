import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../common/Button/Button';
import { InputContainer } from '../common/common.styles';
import { StyledParagraph } from '../LoginForm/LoginForm.styles';
import { ButtonsContainer } from '../SignupForm/SignupForm.styles';
import { BookDetail } from './BookDetail';
import {
  BookCoverSection,
  BookDetailsContainer,
  BookDetailsSection,
  BookGenre,
  CancelBtn,
  ConfirmBtn,
  Details,
  EditInput,
  ModalButtonsContainer,
  modalStyles,
  ModalTitle,
  StyledModalContent,
} from './BookDetails.styles';

const mockUser = {
  id: '1',
  books: ['The Great Gatsby', 'The Hobbit', 'The Alchemist'],
};

const createEditInput = (id: string, label: string) => (
  <InputContainer>
    <label htmlFor={id}>{label}</label>
    <EditInput id={id} />
  </InputContainer>
);

// where to store modal content?
// should it be here or inside JSX or in separate file?
const modalContent = (actionType: string) => {
  if (actionType === 'edit') {
    return (
      <StyledModalContent>
        <div>
          {createEditInput('author', 'Edit author')}
          {createEditInput('genres', 'Edit genres')}
          {createEditInput('description', 'Edit description')}
        </div>
        <div>
          {createEditInput('uploadedBy', 'Edit uploaded by')}
          {createEditInput('publicationDate', 'Edit uploaded by')}
          {createEditInput('language', 'Edit language')}
          {createEditInput('availability', 'Edit availability')}
        </div>
      </StyledModalContent>
    );
  }
  return (
    <StyledParagraph>
      Are you sure you want to delete this book?
    </StyledParagraph>
  );
};

interface BookDetailsType {
  img?: string;
  title?: string;
  author?: string;
  genres?: string[];
  uploadedBy?: string;
  publicationDate?: string;
  language?: string;
  description?: string;
  availability?: string;
}

export const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookDetails, setBookDetails] = useState<BookDetailsType>({});

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/books/${id}`);
        console.log('response: ', response);
        if (response.ok) {
          const bookData = await response.json();
          console.log('bookData: ', bookData);
          setBookDetails(bookData);
        } else {
          console.log('Error:', response.status);
        }
      } catch (error: any) {
        console.log('Error:', error.message);
      }
    };

    fetchBookDetails();
  }, [id]);

  const {
    img = '',
    title = '',
    author = '',
    genres = [],
    uploadedBy = '',
    publicationDate = '',
    language = '',
    description = '',
    availability = '',
  } = bookDetails;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState({ modalTitle: '', actionType: '' });

  const genreElements = genres.map((genre) => (
    <BookGenre key={genre}>{genre}</BookGenre>
  ));

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsModalOpen(true);
    setModal({ actionType: 'delete', modalTitle: 'Confirm deletion' });
  };

  const openEditModal = () => {
    setIsModalOpen(true);
    setModal({ actionType: 'edit', modalTitle: `Edit book "${title}"` });
  };

  const deleteBook = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/books/${id}`);
      if (response.status === 200) {
        // Deletion successful
        navigate('/main'); // Navigate to the "main" page
      } else {
        // Handle unsuccessful deletion
        console.log('Deletion failed:', response.status);
      }
    } catch (error: any) {
      // Error occurred during the deletion request, handle the error condition
      console.log('Error:', error.message);
    }
  };

  const updateBook = async () => {
    let updatedBook;
    try {
      const response = await axios.put(`http://localhost:3000/books/${id}`, updatedBook);
      if (response.status === 200) {
        // Update successful
      } else {
        // Handle unsuccessful update
        console.log('Update failed:', response.status);
      }
    } catch (error: any) {
      // Error occurred during the update request, handle the error condition
      console.log('Error:', error.message);
    }
  };

  const handleConfirm = async () => {
    if (modal.actionType === 'delete') {
      deleteBook();
    } else {
      updateBook();
    }

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
            <BookDetail title="Author" value={author} />
            <BookDetail title="Genres" value={genreElements} />
            <BookDetail title="Description" value={description} />
          </div>

          <div>
            <BookDetail title="Uploaded by" value={uploadedBy} />
            <BookDetail title="Publication Date" value={publicationDate} />
            <BookDetail title="Language" value={language} />
            <BookDetail title="Availability" value={availability} />
          </div>
        </Details>
        {mockUser.books.includes(title) && (
          <ButtonsContainer>
            <Button title="Edit" onClick={openEditModal} />
            <Button title="Delete" onClick={openDeleteModal} />
          </ButtonsContainer>
        )}
      </BookDetailsSection>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel={modal.modalTitle}
      >
        <ModalTitle>{modal.modalTitle}</ModalTitle>
        {modalContent(modal.actionType)}
        <ModalButtonsContainer>
          <ConfirmBtn title="Confirm" onClick={handleConfirm} />
          <CancelBtn title="Cancel" onClick={closeModal} />
        </ModalButtonsContainer>
      </Modal>
    </BookDetailsContainer>
  );
};
