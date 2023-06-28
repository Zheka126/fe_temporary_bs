import {
  BookCoverSection,
  BookDetailItem,
  BookDetailsContainer,
  BookDetailsSection,
  BookGenre,
  Details,
} from './BookDetails.styles';

interface BookDetailsProps {
  bookDetails: {
    img: string;
    title: string;
    author: string;
    genres: string[];
    uploadedBy: string;
    publicationDate: string;
    language: string;
    description: string;
  };
}

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
  } = bookDetails;

  const createDetail = (text: string, value: string | JSX.Element[]) => {
    return (
      <BookDetailItem>
        <p>{text}</p>
        <span>{value}</span>
      </BookDetailItem>
    );
  };

  const genreElements = genres.map((genre) => (
    <BookGenre key={genre}>{genre}</BookGenre>
  ));

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
          </div>
        </Details>
      </BookDetailsSection>
    </BookDetailsContainer>
  );
};
