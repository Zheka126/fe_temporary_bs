import { ReactComponent as StarIcon } from '/assets/star.svg';

import { StarItem, StyledStarsList } from './Rating.styles';

const stars = Array(5)
  .fill(1)
  .map((_, ind) => ind);

interface RatingProps {
  selectedRating: number | null;
  setSelectedRating: (ind: number) => void;
}

export const Rating = ({ selectedRating, setSelectedRating }: RatingProps) => {
  return (
    <StyledStarsList>
      {stars.map((ind) => (
        <StarItem
          key={ind}
          filled={selectedRating ? ind < selectedRating : false}
          onClick={() => setSelectedRating(ind)}
        >
          <StarIcon />
        </StarItem>
      ))}
    </StyledStarsList>
  );
};
