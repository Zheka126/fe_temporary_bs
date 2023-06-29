import { useParams } from 'react-router-dom';
import { BookDetails } from '../components/BookDetails/BookDetails';
import { Header } from '../components/Header/Header';

const bookDetails = {
  img: 'src/assets/the_lord_of_rings.jpg',
  title: 'The Lord of the Rings',
  author: 'J. R. R." Tolkien',
  genres: ['Hisrotical', 'Fantasy'],
  uploadedBy: 'Endava',
  publicationDate: '01.01.2022',
  language: 'English',
  description:
    "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore",
  availability: 'No',
};

export const BookDetailsPage = () => {
  const params = useParams();
  console.log('params: ', params);

  return (
    <>
      <Header />
      <BookDetails bookDetails={bookDetails} />
    </>
  );
};
