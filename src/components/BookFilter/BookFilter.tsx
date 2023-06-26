import { useState } from 'react';

import { ReactComponent as StarSVG } from '../../assets/star.svg';
import { CheckboxContainer, StarItem, StarsList } from './BookFilter.styles';

const starsArr = [
  {
    svg: <StarSVG />,
    isClicked: false,
  },
  {
    svg: <StarSVG />,
    isClicked: false,
  },
  {
    svg: <StarSVG />,
    isClicked: false,
  },
  {
    svg: <StarSVG />,
    isClicked: false,
  },
  {
    svg: <StarSVG />,
    isClicked: false,
  },
];

export const BookFilter = () => {
  const [stars, setStars] = useState(starsArr);

  const onClickStar = (clickedStarInd: number) => {
    const newStars = stars.map((star, ind) => {
      if (ind === clickedStarInd) {
        return {
          ...star,
          isClicked: !star.isClicked,
        };
      }
      return {
        ...star,
        isClicked: clickedStarInd >= ind,
      };
    });
    setStars(newStars);
  };

  return (
    <div>
      <h4>Genres</h4>
      <input type="search" />
      <CheckboxContainer>
        <input type="checkbox" id="fiction" name="fiction" />
        <label htmlFor="fiction">Fiction</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input type="checkbox" id="adventure" name="adventure" />
        <label htmlFor="adventure">Adventure</label>
      </CheckboxContainer>

      <h4>Status</h4>
      <CheckboxContainer>
        <input type="checkbox" id="free" name="free" />
        <label htmlFor="free">Free</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <input type="checkbox" id="busy" name="busy" />
        <label htmlFor="busy">Busy</label>
      </CheckboxContainer>

      <h4>Popularity</h4>
      <StarsList>
        {stars.map((star, ind) => {
          return (
            <StarItem
              key={ind}
              isclicked={star.isClicked}
              onClick={() => onClickStar(ind)}
            >
              {star.svg}
            </StarItem>
          );
        })}
      </StarsList>
    </div>
  );
};
