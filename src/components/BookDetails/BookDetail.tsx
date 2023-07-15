import { BookDetailItem } from './BookDetails.styles';

interface BookDetailProps {
  title: string;
  value: string | JSX.Element[];
}

export const BookDetail = ({ title, value }: BookDetailProps) => (
  <BookDetailItem>
    <p>{title}</p>
    <span>{value}</span>
  </BookDetailItem>
);
