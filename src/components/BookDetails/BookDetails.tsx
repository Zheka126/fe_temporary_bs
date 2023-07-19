import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseURL, StatusCodes } from 'src/api/constants';
import { deleteBook, getBookById, updateBook } from 'src/api/requests/book';
import { getProfileItems } from 'src/api/requests/profile';
import { useAppSelector } from 'src/redux/hooks';
import { BookDetailsType } from 'src/types/book';

import { Button } from '../common/Button/Button';
import { InputContainer } from '../common/Input.styles';
import { Modal } from '../common/Modal/Modal';
import { StyledParagraph } from '../LoginForm/LoginForm.styles';
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

  const [assignments, setAssignments] = useState<string[]>([
    'one',
    'two',
    'three',
  ]);
  const user = useAppSelector((state) => state.auth.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState({ modalTitle: '', actionType: '' });

  const initialValues = {
    id,
    imageSrc: '',
    title: 'Title',
    authors: ['Author1', 'Author2'],
    canBorrow: true,
    genres: ['genre1', 'genre2', 'genre3'],
    uploadedBy: 'User',
    publicationDate: '2023-12-12',
    language: 'English',
    // description:
    //   'lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    availability: 'Free',
  };

  const [bookDetails, setBookDetails] = useState(initialValues);

  const createEditInput = (inputId: keyof BookDetailsType, label: string) => {
    return (
      <InputContainer>
        <label htmlFor={inputId}>{label}</label>
        <EditInput
          type="text"
          required
          id={inputId}
          name={inputId}
          value={
            Array.isArray(bookDetails[inputId])
              ? (bookDetails[inputId] as string[]).join(', ')
              : (bookDetails[inputId] as string)
          }
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setBookDetails({
              ...bookDetails,
              [inputId]: Array.isArray(bookDetails[inputId])
                ? event.target.value.split(', ')
                : event.target.value,
            })
          }
        />
      </InputContainer>
    );
  };
  // where to store modal content?
  // should it be here or inside JSX or in separate file?
  const modalContent = (actionType: string) => {
    switch (actionType) {
      case 'edit':
        return (
          <StyledModalContent>
            <div>
              {createEditInput('title', 'Edit title')}
              {createEditInput('authors', 'Edit author')}
              {createEditInput('genres', 'Edit genres')}
              {/* <input type="file" onChange={handleFileChange} /> */}
              {/* {createEditInput('description', 'Edit description')} */}
            </div>
            <div>
              {createEditInput('uploadedBy', 'Edit uploaded by')}
              {createEditInput('publicationDate', 'Edit uploaded by')}
              {createEditInput('language', 'Edit language')}
              {createEditInput('availability', 'Edit availability')}
            </div>
          </StyledModalContent>
        );
      case 'delete':
        return (
          <StyledParagraph>
            Are you sure you want to delete this book?
          </StyledParagraph>
        );
      case 'assignToMe':
        return (
          <StyledParagraph>
            Are you sure you want to assign this book to yourself?
          </StyledParagraph>
        );
      default:
        return <h2>Empty window... How did you get here?</h2>;
    }
  };

  const genreElements = bookDetails.genres.map((genre) => (
    <BookGenre key={genre}>{genre}</BookGenre>
  ));

  const openModal = (actionType: string, modalTitle: string) => {
    setIsModalOpen(true);
    setModal({ actionType, modalTitle });
  };
  const openDeleteModal = () => {
    openModal('delete', 'Confirm deletion');
  };
  const openEditModal = () => {
    openModal('edit', `Edit book "${bookDetails.title}"`);
  };
  const openAssignToMeModal = () => {
    openModal('assignToMe', `Assign book "${bookDetails.title}" to me`);
  };

  const fethcDeletingBook = async () => {
    try {
      await deleteBook(id);
      toast.success('The book has been successfully deleted!');
      navigate('/main');
    } catch (error: any) {
      toast.error('Some errors with the delete');
      console.log('Error:', error.message);
    }
  };

  const fetchUpdatingBook = async () => {
    try {
      const updatedBook = {
        ...bookDetails,
        authors: bookDetails.authors.join(', ').split(', '),
        genres: bookDetails.genres.join(', ').split(', '),
      };
      // if (bookDetails !== updateBook)
      // make this check in future to avoid sending the same book to server
      await updateBook(id, updatedBook);

      toast.success('The book has been successfully updated!');
    } catch (error: any) {
      if (error.response.status === StatusCodes.NOT_ALLOWED) {
        toast.error('You are not allowed to edit this book');
      }
      console.log('Error:', error.message);
    }
  };

  const fetchAssigningBook = async () => {
    if (!bookDetails.canBorrow) {
      toast.warning(
        'The book is already assigned to another user for the current period of time, please join the queue by clicking on Add to queue'
      );
      return;
    }
    try {
      // await assignBookToCurrentUser(id);
      toast.success(
        `Book was successfully assigned to ${user?.userName}. Your assignment ends at: <End_date> /n Please wait for the Administrator approval`
      );
    } catch (error: any) {
      toast.error('Some errors with the assign');
      console.log('Error:', error.message);
    }
  };

  const handleConfirm = async () => {
    if (modal.actionType === 'edit') {
      await fetchUpdatingBook();
    } else if (modal.actionType === 'delete') {
      await fethcDeletingBook();
    } else {
      await fetchAssigningBook();
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data: bookDetailsData } = await getBookById(id);
        console.log('bookDetailsData: ', bookDetailsData);
        setBookDetails(bookDetailsData);

        const { data: assignmentsData } = await getProfileItems('assignments');
        console.log('assignmentsData: ', assignmentsData);
        setAssignments(assignmentsData);
      } catch (error: any) {
        toast.error(
          'Something went wrong with getting book details. Please try again later.'
        );
        console.log('Error:', error.message);
      }
    })();
  }, []);

  return (
    <BookDetailsContainer>
      <BookCoverSection>
        <img src={`${baseURL}/${bookDetails.imageSrc}`} alt="book cover" />
      </BookCoverSection>
      <BookDetailsSection>
        <h1>{bookDetails.title}</h1>
        <Details>
          <div>
            <BookDetail title="Author" value={bookDetails.authors.join(', ')} />
            <BookDetail title="Genres" value={genreElements} />
            {/* <BookDetail title="Description" value={bookDetails.description} /> */}
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
        <ButtonsContainer>
          {user?.userName === bookDetails.uploadedBy && (
            <>
              <Button title="Edit" onClick={openEditModal} />
              <Button title="Delete" onClick={openDeleteModal} />
            </>
          )}
          <span
            data-tooltip-id={assignments.length > 2 ? 'tooltip' : ''}
            data-tooltip-content="You should have less than 2 assignments to Assign a book"
            data-tooltip-variant="warning"
          >
            <Button
              title="Assign to Me"
              onClick={openAssignToMeModal}
              disabled={assignments.length > 2}
            />
          </span>
        </ButtonsContainer>
      </BookDetailsSection>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modal.modalTitle}
        onConfirm={handleConfirm}
      >
        {modalContent(modal.actionType)}
      </Modal>
    </BookDetailsContainer>
  );
};
