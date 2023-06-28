import { ReactComponent as StarIcon } from 'src/assets/star.svg';

import { StarItem, StarsList } from './Rating.styles';

const stars = Array(5).fill({ isClicked: false });

interface RatingProps {
  selectedRating: number;
  setSelectedRating: (ind: number) => void;
}

export const Rating = ({ selectedRating, setSelectedRating }: RatingProps) => {
  return (
    <StarsList>
      {stars.map((_, ind) => {
        return (
          <StarItem
            key={ind!}
            filled={ind <= selectedRating}
            onClick={() => setSelectedRating(ind)}
          >
            <StarIcon />
          </StarItem>
        );
      })}
    </StarsList>
  );
};
