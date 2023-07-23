import { useMemo } from 'react';
import { baseURL } from 'src/api/constants';
import { BookDetailsType } from 'src/types/book';
import { getAuthorFullName } from 'src/utils';

import { BookDetail } from './BookDetail';
import {
  AllDetailsContainer,
  CoverSection,
  Details,
  DetailsSection,
  GenreTag,
} from './BookDetails.styles';

export const DumbBookDetails = ({ details }: { details: BookDetailsType }) => {
  const {
    genres,
    authors,
    imageSrc,
    title,
    description,
    uploadedBy,
    publicationDate,
    language,
    availability,
  } = details;

  const genreElements = useMemo(
    () => genres.map(({ id, name }) => <GenreTag key={id}>{name}</GenreTag>),
    [genres]
  );
  const authorsNames = useMemo(
    () => authors.map(getAuthorFullName).join(', '),
    [authors]
  );
  const computedImageSrc = useMemo(
    () =>
      typeof imageSrc !== 'string'
        ? URL.createObjectURL(imageSrc as File)
        : `${baseURL}/${imageSrc}`,
    [imageSrc]
  );

  return (
    <AllDetailsContainer data-testid="all-details-container">
      <CoverSection data-testid="cover-section">
        <img
          src={computedImageSrc}
          alt="book cover"
          data-testid="book-cover-image"
        />
      </CoverSection>
      <DetailsSection data-testid="details-section">
        <h1 data-testid="book-title">{title}</h1>
        <Details data-testid="book-details">
          <div data-testid="book-details-left">
            <BookDetail
              title="Author"
              value={authorsNames}
              data-testid="book-author"
            />
            <BookDetail
              title="Genres"
              value={genreElements}
              data-testid="book-genres"
            />
            <BookDetail
              title="Description"
              value={description}
              data-testid="book-description"
            />
          </div>

          <div data-testid="book-details-right">
            <BookDetail
              title="Uploaded by"
              value={uploadedBy}
              data-testid="book-uploaded-by"
            />
            <BookDetail
              title="Publication Date"
              value={publicationDate}
              data-testid="book-publication-date"
            />
            <BookDetail
              title="Language"
              value={language}
              data-testid="book-language"
            />
            <BookDetail
              title="Availability"
              value={availability}
              data-testid="book-availability"
            />
          </div>
        </Details>
      </DetailsSection>
    </AllDetailsContainer>
  );
};
