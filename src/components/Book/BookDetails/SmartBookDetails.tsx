import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StatusCodes } from 'src/api/constants';
import {
  assignBookToCurrentUser,
  deleteBook,
  getBookById,
  updateBook,
} from 'src/api/requests/book';
import { getProfileItems } from 'src/api/requests/profile';
import {
  BaseModal,
  Button,
  Calendar,
  ConfirmModal,
  Loader,
} from 'src/components';
import { ButtonsContainer } from 'src/components/common/Container.styles';
import { StyledParagraph } from 'src/components/LoginForm/LoginForm.styles';
import { useAppSelector } from 'src/redux/hooks';
import { BookAssignmentType } from 'src/types/assignments';
import { AuthorType } from 'src/types/author';
import {
  AvailabilityStatus,
  BookDetailsType,
  BookDetailsUpdateRequest,
  Language,
} from 'src/types/book';
import { GenreType } from 'src/types/genre';

import { DumbBookDetails } from './DumbBookDetails';
import { EditForm } from './EditForm/EditForm';

export const SmartBookDetails = () => {
  const navigate = useNavigate();
  const { id: bookId } = useParams();
  const user = useAppSelector((state) => state.auth.user);
  const allAuthors = useAppSelector((state) => state.authors.authors);
  const allGenres = useAppSelector((state) => state.genres.genres);

  const [confrimModal, setConfirmModal] = useState({
    actionType: '',
    isOpen: false,
    title: '',
    content: <div />,
  });
  const [baseModal, setBaseModal] = useState({
    actionType: '',
    isOpen: false,
    title: '',
    content: <div />,
  });

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
  };
  const [details, setDetails] = useState<BookDetailsType>(initialValues);

  const [userAssignments, setUserAssignments] = useState<BookAssignmentType[]>(
    []
  );
  console.log('userAssignments: ', userAssignments);

  const [errors, setErrors] = useState({
    bookDetailsError: '',
    assigmentsErros: '',
  });
  const [isBookDetailsIsLoading, setBookDetailsIsLoading] = useState(true);

  const filterAssigments = (
    assignments: BookAssignmentType[],
    status: string
  ) => assignments.filter((assignment) => assignment.status === status);

  const onUpdateBook = async (updatedBook: BookDetailsUpdateRequest) => {
    try {
      await updateBook(updatedBook);
      toast.success('The book has been successfully updated!');
      setBaseModal((prev) => ({ ...prev, isOpen: false }));

      const newBook = {
        ...updatedBook,
        authors: updatedBook.authorId.reduce((acc, authorId) => {
          const author = allAuthors.find(
            (currentAuthor) => currentAuthor.id === authorId
          );
          return author ? [...acc, author] : acc;
        }, [] as AuthorType[]),
        genres: updatedBook.genreId.reduce((acc, genreId) => {
          const genre = allGenres.find(
            (currentGenre) => currentGenre.id === genreId
          );
          return genre ? [...acc, genre] : acc;
        }, [] as GenreType[]),
        ...(typeof updatedBook.image !== 'string'
          ? { imageSrc: updatedBook.image }
          : {}),
      };
      if (typeof updatedBook.image !== 'string') {
        newBook.imageSrc = updatedBook.image;
      }

      setDetails((prev) => ({ ...prev, ...newBook }));
    } catch (error: any) {
      if (error.response.status === StatusCodes.NOT_ALLOWED) {
        toast.error('You are not allowed to edit this book');
      } else {
        toast.error('Some errors with the update');
      }
      console.log('Error:', error.message);
    }
  };

  const onAddBookToQueque = async () => {
    try {
      toast.success(
        'Book was successfully added to the queue. Your assignment starts at: <Start_date>'
      );
      setBaseModal((prev) => ({ ...prev, isOpen: false }));
    } catch (error: any) {
      toast.error('Some errors with the addint to queue');
      console.log('Error:', error.message);
    }
  };

  const openBaseModal = (actionType: 'edit' | 'addToQueue') => {
    const baseModalData = {
      edit: {
        title: `Edit book "${details.title}"`,
        content: (
          <EditForm
            bookDetails={details}
            onUpdateBook={onUpdateBook}
            onModalClose={() =>
              setBaseModal((prev) => ({ ...prev, isOpen: false }))
            }
          />
        ),
      },
      addToQueue: {
        title: 'Please choose the period for your assignment',
        content: <Calendar onAddBookToQueque={onAddBookToQueque} />,
      },
    };
    const { title, content } = baseModalData[actionType];

    setBaseModal(() => ({
      isOpen: true,
      actionType,
      title,
      content,
    }));
  };

  const openConfirmModal = (actionType: 'delete' | 'assignToMe') => {
    const confirmationData = {
      delete: {
        title: `Delete book "${details.title}"`,
        message: 'Are you sure you want to delete this book?',
      },
      assignToMe: {
        title: `Assign book "${details.title}"`,
        message: 'Are you sure you want to assign this book to yourself?',
      },
    };

    const { title, message } = confirmationData[actionType];
    setConfirmModal(() => ({
      isOpen: true,
      actionType,
      title,
      content: <StyledParagraph>{message}</StyledParagraph>,
    }));
  };

  const onDeleteBook = async () => {
    try {
      await deleteBook(bookId);
      toast.success('The book has been successfully deleted!');
      navigate(-1);
    } catch (error: any) {
      toast.error('Some errors with the delete');
      console.log('Error:', error.message);
    }
  };

  const onAssignBook = async () => {
    if (!details.canBorrow) {
      toast.warning(
        'The book is already assigned to another user for the current period of time, please join the queue by clicking on Add to queue'
      );
      return;
    }
    try {
      console.log('bookId: ', bookId);
      await assignBookToCurrentUser(bookId);
      toast.success(
        `Book was successfully assigned to ${user?.userName}. Your assignment ends at: <End_date> /n Please wait for the Administrator approval`
      );
    } catch (error: any) {
      toast.error('Some errors with the assign');
      console.log('Error:', error.message);
    }
  };

  const handleConfirm = async () => {
    if (confrimModal.actionType === 'delete') {
      await onDeleteBook();
    } else if (confrimModal.actionType === 'assignToMe') {
      await onAssignBook();
    }
    setConfirmModal((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    (() => {
      getBookById(bookId)
        .then(({ data }) => {
          setDetails(data);
        })
        .catch((error) => {
          const errorMessage =
            'Oops! Something went wrong while loading the book details. Please try again later';
          toast.error(errorMessage);
          setErrors((prev) => ({ ...prev, bookDetailsError: errorMessage }));
          console.error('Error:', error.message);
        })
        .finally(() => {
          setBookDetailsIsLoading(false);
        });

      getProfileItems('assignments')
        .then(({ data }) => {
          setUserAssignments(data.data);
        })
        .catch((error) => {
          const errorMessage =
            'Oops! Something went wrong while loading the assignments. Please try again later';
          toast.error(errorMessage);
          setErrors((prev) => ({ ...prev, assigmentsErros: errorMessage }));
          console.error('Error:', error.message);
        });
    })();
  }, []);

  const isAssignButtonDisabled =
    filterAssigments(userAssignments, 'ACTIVE').length > 2 ||
    filterAssigments(userAssignments, 'PENDING').length > 0 ||
    userAssignments.some((assignment) => assignment.title === details.title);

  const isAddToQueueButtonDisabled =
    filterAssigments(userAssignments, 'ACTIVE').length +
      filterAssigments(userAssignments, 'PENDING').length >
    3;

  return isBookDetailsIsLoading ? (
    <Loader size="big" />
  ) : errors.bookDetailsError ? (
    <h2>{errors.bookDetailsError}</h2>
  ) : (
    <div>
      <DumbBookDetails details={details} />
      <BaseModal
        isOpen={baseModal.isOpen}
        onClose={() => setBaseModal((prev) => ({ ...prev, isOpen: false }))}
        title={baseModal.title}
      >
        {baseModal.content}
      </BaseModal>
      <ConfirmModal
        isOpen={confrimModal.isOpen}
        onClose={() => setConfirmModal((prev) => ({ ...prev, isOpen: false }))}
        title={confrimModal.title}
        onConfirm={handleConfirm}
      >
        {confrimModal.content}
      </ConfirmModal>

      <ButtonsContainer style={{ marginTop: '30px', width: '1000px' }}>
        {user?.userName === details.uploadedBy && (
          <ButtonsContainer style={{ width: '350px' }}>
            <Button title="Edit" onClick={() => openBaseModal('edit')} />
            <Button title="Delete" onClick={() => openConfirmModal('delete')} />
          </ButtonsContainer>
        )}
        <span
          data-tooltip-id="tooltip"
          data-tooltip-content={
            isAddToQueueButtonDisabled
              ? `You'll be able to add new books starting: <End_date_Current_Pending_Assignment>`
              : ''
          }
          data-tooltip-variant="warning"
        >
          <Button
            title="Add to queue"
            onClick={() => openBaseModal('addToQueue')}
            disabled={isAddToQueueButtonDisabled}
          />
        </span>
        <span
          data-tooltip-id="tooltip"
          data-tooltip-content={
            isAssignButtonDisabled
              ? 'You should have less than 2 active assignments to Assign a book'
              : ''
          }
          data-tooltip-variant="warning"
        >
          <Button
            title="Assign to Me"
            onClick={() => openConfirmModal('assignToMe')}
            disabled={isAssignButtonDisabled}
          />
        </span>
      </ButtonsContainer>
    </div>
  );
};
