import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseURL, StatusCodes } from 'src/api/constants';
import {
  assignBookToCurrentUser,
  deleteBook,
  getBookById,
  updateBook,
} from 'src/api/requests/book';
import { getProfileItems } from 'src/api/requests/profile';
import { useAppSelector } from 'src/redux/hooks';
import { AuthorType } from 'src/types/author';
import {
  AvailabilityStatus,
  BookDetailsType,
  BookDetailsUpdateRequest,
  Language,
} from 'src/types/book';
import { GenreType } from 'src/types/genre';
import { getAuthorFullName } from 'src/utils';

import { BaseModal, ConfirmModal } from '..';
import { Button } from '../common/Button/Button';
import { ButtonsContainer } from '../common/Container.styles';
import { StyledParagraph } from '../LoginForm/LoginForm.styles';
import { BookDetail } from './BookDetail';
import {
  BookCoverSection,
  BookDetailsContainer,
  BookDetailsSection,
  BookGenreTag,
  Details,
} from './BookDetails.styles';
import { EditForm } from './EditForm/EditForm';

export const BookDetails = () => {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const { id: bookId } = useParams();
  const user = useAppSelector((state) => state.auth.user);

  const [userAssignments, setUserAssignments] = useState<string[]>([]);

  const [confrimModal, setConfirmModal] = useState({
    actionType: '',
    isOpen: false,
    title: '',
    content: <div />,
  });

  const [isBaseModalOpen, setIsBaseModalOpen] = useState(false);

  const initialValues = {
    id: '',
    imageSrc: '',
    title: '',
    authors: [] as AuthorType[],
    canBorrow: true,
    genres: [] as GenreType[],
    uploadedBy: '',
    publicationDate: '',
    language: '' as Language,
    description: '',
    availability: '' as AvailabilityStatus,
    some: '',
  };

  const [bookDetails, setBookDetails] =
    useState<BookDetailsType>(initialValues);

  const genreElements = bookDetails.genres.map(({ id, name }) => (
    <BookGenreTag key={id}>{name}</BookGenreTag>
  ));
  const authorsNames = bookDetails.authors.map((author) =>
    getAuthorFullName(author)
  );

  // const authors = useAppSelector((state) => state.authors.authors);

  // where to store this function - inside or outside of form component?
  const onUpdateBook = async (updatedBook: BookDetailsUpdateRequest) => {
    // console.log('updatedBook: ', updatedBook);
    try {
      await updateBook(updatedBook);
      toast.success('The book has been successfully updated!');
      setIsBaseModalOpen(false);

      // setBookDetails({ ...updatedBook,
      //   id: bookId,
      //   authors: allAuthors.filter((author) => author.id === updatedBook.authorId)
      // });
    } catch (error: any) {
      if (error.response.status === StatusCodes.NOT_ALLOWED) {
        toast.error('You are not allowed to edit this book');
      }
      // console.log('Error:', error.message);
    }
  };

  type ActionType = 'delete' | 'assignToMe';

  const openConfirmModal = (actionType: ActionType) => {
    const actionData = {
      delete: {
        title: `Delete book "${bookDetails.title}"`,
        content: (
          <StyledParagraph>
            Are you sure you want to delete this book?
          </StyledParagraph>
        ),
      },
      assignToMe: {
        title: `Assign book "${bookDetails.title}"`,
        content: (
          <StyledParagraph>
            Are you sure you want to assign this book to yourself?
          </StyledParagraph>
        ),
      },
    };

    const { title, content } = actionData[actionType];

    setConfirmModal((prev) => ({
      ...prev,
      isOpen: true,
      actionType,
      title,
      content,
    }));
  };

  const onDeleteBook = async () => {
    try {
      await deleteBook(bookId);
      toast.success('The book has been successfully deleted!');
      navigate('/main');
    } catch (error: any) {
      toast.error('Some errors with the delete');
      // console.log('Error:', error.message);
    }
  };

  const onAssignBook = async () => {
    if (!bookDetails.canBorrow) {
      toast.warning(
        'The book is already assigned to another user for the current period of time, please join the queue by clicking on Add to queue'
      );
      return;
    }
    try {
      await assignBookToCurrentUser(bookId);
      toast.success(
        `Book was successfully assigned to ${user?.userName}. Your assignment ends at: <End_date> /n Please wait for the Administrator approval`
      );
    } catch (error: any) {
      toast.error('Some errors with the assign');
      // console.log('Error:', error.message);
    }
  };

  const handleConfirm = async () => {
    if (confrimModal.actionType === 'delete') {
      await onDeleteBook();
    } else {
      await onAssignBook();
    }
    setConfirmModal((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    (async () => {
      getBookById(bookId)
        .then(({ data }) => {
          setBookDetails(data);
        })
        .catch(() => {
          toast.error(
            'Oops! Something went wrong while loading the book details. Please try again later'
          );
          // console.log('Error:', error.message);
        });

      getProfileItems('assignments')
        .then(({ data }) => {
          setUserAssignments(data.data);
        })
        .catch((error) => {
          toast.error(
            'Something went wrong while loading the assignments. Please try again later.'
          );
          console.log('Error:', error.message);
        });
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
            <BookDetail title="Author" value={authorsNames.join(', ')} />
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
              <Button title="Edit" onClick={() => setIsBaseModalOpen(true)} />
              <Button
                title="Delete"
                onClick={() => openConfirmModal('delete')}
              />
            </>
          )}
          <span
            data-tooltip-id={userAssignments.length > 2 ? 'tooltip' : ''}
            data-tooltip-content="You should have less than 2 assignments to Assign a book"
            data-tooltip-variant="warning"
          >
            <Button
              title="Assign to Me"
              onClick={() => openConfirmModal('assignToMe')}
              disabled={userAssignments.length > 2}
            />
          </span>
        </ButtonsContainer>
      </BookDetailsSection>
      {isBaseModalOpen && (
        <BaseModal
          isOpen={isBaseModalOpen}
          onClose={() => setIsBaseModalOpen(false)}
          title={`Edit book "${bookDetails.title}"`}
        >
          <EditForm
            bookDetails={bookDetails}
            onUpdateBook={onUpdateBook}
            onModalClose={() => setIsBaseModalOpen(false)}
          />
        </BaseModal>
      )}
      <ConfirmModal
        isOpen={confrimModal.isOpen}
        onClose={() => setConfirmModal((prev) => ({ ...prev, isOpen: false }))}
        title={confrimModal.title}
        onConfirm={handleConfirm}
      >
        {confrimModal.content}
      </ConfirmModal>
    </BookDetailsContainer>
  );
};
