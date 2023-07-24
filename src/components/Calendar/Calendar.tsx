import { Button } from '..';

interface CalendarProps {
  onAddBookToQueque: () => void;
}

export const Calendar = ({ onAddBookToQueque }: CalendarProps) => {
  return (
    <>
      <p>Calendar would be implemented in future</p>
      <Button title="add to queque" onClick={onAddBookToQueque} />
    </>
  );
};
