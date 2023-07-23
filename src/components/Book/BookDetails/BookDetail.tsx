import { DetailItem } from './BookDetails.styles';

interface BookDetailProps {
  title: string;
  value: string | JSX.Element[];
}

export const BookDetail = ({ title, value }: BookDetailProps) => (
  <DetailItem>
    <p>{title}</p>
    <span>{value}</span>
  </DetailItem>
);
