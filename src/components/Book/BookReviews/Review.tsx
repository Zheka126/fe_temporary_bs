import { StarsList } from 'src/components/Rating/StartList';
import { ReviewType } from 'src/types/review';

import userIcon from '/assets/userIcon.png';

import { Content, Date, Title, Username } from './Reviews.styles';

export const Review = ({ review }: { review: ReviewType }) => {
  const { title, username, content, rate } = review;
  return (
    <li>
      <Username>
        <img src={userIcon} alt="User Icon" data-testid="user-icon" />
        {username}
      </Username>
      <Title>{title}</Title>
      <StarsList filled length={rate} />
      <Date>24.25.2556</Date>
      <Content>{content}</Content>
    </li>
  );
};
