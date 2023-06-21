import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsSubmenuShowed } from '../../redux/reducers/headerReducer';
import {
  BtnsContainer,
  Dropdown,
  NavBtn,
  NavBtnWithSubmenu,
  StyledHeader,
} from './Header.styles';

export const Header = () => {
  const dispatch = useAppDispatch();
  const isSubmenuShowed = useAppSelector(
    (state) => state.header.isSubmenuShowed
  );

  const handleUsernameClick = () => {
    dispatch(setIsSubmenuShowed(!isSubmenuShowed));
  };

  return (
    <StyledHeader>
      <Link to="/Catalog">
        <img src="src/assets/darkLogo.png" alt="Endava Logo" />
      </Link>
      <BtnsContainer>
        <NavBtn>
          <Link to="/Catalog">Catalog</Link>
        </NavBtn>
        <NavBtnWithSubmenu
          className="active"
          onClick={handleUsernameClick}
          isSubmenuShowed={isSubmenuShowed}
        >
          {/* Should be displayed real username of current user */}
          Username
          <img src="src\assets\arrow-down.svg" alt="Drop down" />
          <Dropdown isSubmenuShowed={isSubmenuShowed}>
            <li>
              <Link to="/Profile">My profile</Link>
            </li>
            {/* should display admin only if user has admin rights */}
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            <li>
              <Link to="/SignOut">Sign out</Link>
            </li>
          </Dropdown>
        </NavBtnWithSubmenu>
      </BtnsContainer>
    </StyledHeader>
  );
};
