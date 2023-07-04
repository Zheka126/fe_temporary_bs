import { Link } from 'react-router-dom';
import { StyledDropdown } from './Header.styles';

interface DropdownProps {
  isDropdownShowed: boolean;
  ref: (node: HTMLElement | null) => void;
  //   style: React.CSSProperties;
}

export const Dropdown = ({ isDropdownShowed }: DropdownProps) =>
  isDropdownShowed && (
    <StyledDropdown>
      <li>
        <Link onClick={() => console.log('My profile clicked')} to="/Profile">
          My profile
        </Link>
      </li>
      {/* should display admin only if user has admin rights */}
      <li>
        <Link to="/Admin">Admin</Link>
      </li>
      <li>
        <Link to="/SignOut">Sign out</Link>
      </li>
    </StyledDropdown>
  );
