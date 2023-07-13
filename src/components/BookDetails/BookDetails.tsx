import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StatusCodes } from 'src/api/constants';
import { deleteBook, updateBook } from 'src/api/requests/book';
import { BookDetailsType } from 'src/types/book';

import { Button } from '../common/Button/Button';
import { InputContainer } from '../common/Input.styles';
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

  const [bookDetails, setBookDetails] =
    useState<BookDetailsType>(initialValues);
  const [assignments, setAssignments] = useState<string[]>([]);

  const createEditInput = (inputId: string, label: string) => (
    <InputContainer>
      <label htmlFor={inputId}>{label}</label>
      <EditInput id={inputId} value={bookDetails[inputId]} 
      onChange={(event: KeyboardEvent) => setBookDetails({...bookDetails, bookDetails[inputId]: event.target.value})} />
    </InputContainer>
  );

  // where to store modal content?
  // should it be here or inside JSX or in separate file?
  const modalContent = (actionType: string) => {
    switch (actionType) {
      case 'assignToMe':
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
      case 'edit':
        break;
      case 'delete':
        return (
          <StyledParagraph>
            Are you sure you want to delete this book?
          </StyledParagraph>
        );

      default:
        return <h2>Empty window... How did you get here?</h2>;
    }
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { status, data } = await getBookById(id);
  //       console.log('data: ', data);

  //       // do we even need to check status?
  //       // because the async function fires error and the next code won't work
  //       if (status === StatusCodes.SUCCESS) {
  //         setBookDetails(data);

  //         const { status: assignmentsStatus, data: assignmentsData } =
  //           await getProfileItems('assignments');

  //         if (assignmentsStatus === StatusCodes.SUCCESS) {
  //           setAssignments(assignmentsData);
  //         }
  //       }
  //     } catch (error: any) {
  //       console.log('Error:', error.message);
  //     }
  //   })();
  // }, [id]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState({ modalTitle: '', actionType: '' });

  const genreElements = bookDetails.genres.map((genre) => (
    <BookGenre key={genre}>{genre}</BookGenre>
  ));

  const closeModal = () => setIsModalOpen(false);

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

  const openAssignToMeModal = () => {
    setIsModalOpen(true);
    setModal({
      actionType: 'assignToMe',
      modalTitle: `Assign book "${bookDetails.title}" to me`,
    });
  };

  const fethcDeletingBook = async () => {
    try {
      const { status } = await deleteBook(id);
      if (status === StatusCodes.SUCCESS) {
        toast.success('The book has been successfully deleted!');
        closeModal();
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
        closeModal();
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
        <img src={bookDetails.img} alt="book cover" />
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
            <Button
              title="Assign to Me"
              onClick={openAssignToMeModal}
              disabled={assignments.length > 2}
            />
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
