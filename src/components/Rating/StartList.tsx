import { v4 } from 'uuid';

import { ReactComponent as StarIcon } from '/assets/star.svg';

import { StyledStarsList } from './Rating.styles';

interface RatingProps {
  length: number | null;
  filled: boolean;
  //   setSelectedRating: (ind: number) => void;
}

export const StarsList = ({ length, filled }: RatingProps) => {
  return (
    <StyledStarsList filled={filled}>
      {length && Array.from({ length }).map(() => <StarIcon key={v4()} />)}
    </StyledStarsList>
  );
};
