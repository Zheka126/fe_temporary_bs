import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StatusCodes } from 'src/api/constants';
import { deleteBook, getBookById, updateBook } from 'src/api/requests/book';
import { BookType } from 'src/types/book';

import { Button } from '../common/Button/Button';
import { InputContainer } from '../common/common.styles';
import { StyledParagraph } from '../LoginForm/LoginForm.styles';
import { Modal } from '../Modal/Modal';
import { ButtonsContainer } from '../SignupForm/SignupForm.styles';
import { BookDetail } from './BookDetail';
import {
  BookCoverSection,
  BookDetailsContainer,
  BookDetailsSection,
  BookGenre,
  Details,
  EditInput,
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

export const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialValues = {
    img: '',
    title: '',
    author: '',
    genres: [],
    uploadedBy: '',
    publicationDate: '',
    language: '',
    description: '',
    availability: '',
  };

  const [bookDetails, setBookDetails] = useState<BookType>(initialValues);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const { status, data } = await getBookById(id);

        if (status === StatusCodes.SUCCESS) {
          // const bookData = await response.json();
          console.log('data: ', data);
          // setBookDetails(bookData);
        }
      } catch (error: any) {
        console.log('Error:', error.message);
      }
    };

    fetchBookDetails();
  }, [id]);

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
    setModal({
      actionType: 'edit',
      modalTitle: `Edit book "${bookDetails.title}"`,
    });
  };

  const fethcDeletingBook = async () => {
    try {
      const { status } = await deleteBook(id);
      if (status === StatusCodes.SUCCESS) {
        toast.success('The book has been successfully deleted!');
        navigate('/main');
      }
    } catch (error: any) {
      toast.error('Something went wrong. Please try again later.');
      console.log('Error:', error.message);
    }
  };

  const fetchUpdatingBook = async () => {
    try {
      let updatedBook;
      const { status } = await updateBook(id, updatedBook);
      if (status === StatusCodes.SUCCESS) {
        toast.success('The book has been successfully updated!');
        navigate('/main');
      }
    } catch (error: any) {
      toast.error('Something went wrong. Please try again later.');
      console.log('Error:', error.message);
    }
  };

  const handleConfirm = async () => {
    if (modal.actionType === 'delete') {
      fethcDeletingBook();
    } else {
      fetchUpdatingBook();
    }
    setIsModalOpen(false);
  };

  return (
    <BookDetailsContainer>
      <BookCoverSection>
        <img src={img} alt="book cover" />
      </BookCoverSection>
      <BookDetailsSection>
        <h1>{bookDetails.title}</h1>
        <Details>
          <div>
            <BookDetail title="Author" value={bookDetails.author} />
            <BookDetail title="Genres" value={genreElements} />
            <BookDetail title="Description" value={bookDetails.description} />
          </div>

          <div>
            <BookDetail title="Uploaded by" value={bookDetails.uploadedBy} />
            <BookDetail
              title="Publication Date"
              value={bookDetails.publicationDate}
            />
            <BookDetail title="Language" value={bookDetails.language} />
            <BookDetail title="Availability" value={bookDetails.availability} />
          </div>
        </Details>
        {mockUser.books.includes(bookDetails.title) && (
          <ButtonsContainer>
            <Button title="Edit" onClick={openEditModal} />
            <Button title="Delete" onClick={openDeleteModal} />
          </ButtonsContainer>
        )}
      </BookDetailsSection>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modal.modalTitle}
        onConfirm={handleConfirm}
      >
        {modalContent(modal.actionType)}
      </Modal>
    </BookDetailsContainer>
  );
};
