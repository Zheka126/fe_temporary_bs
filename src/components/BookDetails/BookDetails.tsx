import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseURL } from 'src/api/constants';
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

  const [assignments, setAssignments] = useState<string[]>([]);
  const user = useAppSelector((state) => state.auth.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState({ modalTitle: '', actionType: '' });

  // const initialValues = {
  //   id,
  //   imageSrc: '',
  //   title: '',
  //   authors: [],
  //   canBorrow: true,
  //   genres: [],
  //   uploadedBy: '',
  //   publicationDate: '',
  //   language: '',
  //   description: '',
  //   availability: '',
  // };

  const initialValues = {
    id,
    imageSrc: '',
    title: 'Title',
    authors: ['Author1', 'Author2'].join(' '),
    canBorrow: true,
    genres: ['genre1', 'genre2', 'genre3'].join(' '),
    uploadedBy: 'User',
    publicationDate: '2023-12-12',
    language: 'English',
    description:
      'lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    availability: 'Free',
  };

  const [bookDetails, setBookDetails] =
    useState<BookDetailsType>(initialValues);


  const createEditInput = (inputId: keyof BookDetailsType, label: string) => {

    // handle all cases of user actions 
    // like trim()
    // 

    return (
      <InputContainer>
        <label htmlFor={inputId}>{label}</label>
        <EditInput
          type="text"
          id={inputId}
          name={inputId}
          value={bookDetails[inputId] as string}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setBookDetails({ ...bookDetails, [inputId]: event.target.value })
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
      case 'assignToMe':
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

  const genreElements = bookDetails.genres.split(' ').map((genre) => (
    <BookGenre key={genre}>{genre}</BookGenre>
  ));

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
      await deleteBook(id);
      toast.success('The book has been successfully deleted!');
      setIsModalOpen(false);
      navigate('/main');
    } catch (error: any) {
      toast.error('Something went wrong. Please try again later.');
      console.log('Error:', error.message);
    }
  };

  const fetchUpdatingBook = async () => {
    try {
      let updatedBook;
      await updateBook(id, updatedBook);
      toast.success('The book has been successfully updated!');
      setIsModalOpen(false);
    } catch (error: any) {
      toast.error('Something went wrong. Please try again later.');
      console.log('Error:', error.message);
    }
  };

  const handleConfirm = async () => {
    if (modal.actionType === 'delete') {
      await fethcDeletingBook();
    } else {
      fetchUpdatingBook();
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
        toast.error('Something went wrong. Please try again later.');
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
            <BookDetail title="Author" value={bookDetails.authors} />
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
        <ButtonsContainer>
          {user?.userName === bookDetails.uploadedBy && (
            <>
              <Button title="Edit" onClick={openEditModal} />
              <Button title="Delete" onClick={openDeleteModal} />
            </>
          )}
          <Button
            title="Assign to Me"
            onClick={openAssignToMeModal}
            disabled={assignments.length > 2 && bookDetails.canBorrow}
          />
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
