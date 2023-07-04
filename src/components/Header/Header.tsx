import {
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import {
  BtnsContainer,
  NavBtn,
  NavBtnWithDropdown,
  StyledHeader,
} from './Header.styles';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isDropdownOpen,
    onOpenChange: setIsDropdownOpen,
    middleware: [offset(), flip(), shift()],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context),
    useRole(context),
  ]);

  return (
    <StyledHeader>
      <Link to="/Catalog">
        <img src="src/assets/darkLogo.png" alt="Endava Logo" />
      </Link>
      <BtnsContainer>
        <NavBtn>
          <Link to="/Catalog">Catalog</Link>
        </NavBtn>
        <NavBtnWithDropdown
          className="active"
          isDropdownShowed={isDropdownOpen}
        >
          <NavBtn ref={refs.setReference} {...getReferenceProps()}>
            {/* Should be displayed real username of current user */}
            Username
            <img src="src\assets\arrow-down.svg" alt="Drop down" />
          </NavBtn>
          <Dropdown
            isDropdownShowed={isDropdownOpen}
            ref={refs.setFloating}
            // style={floatingStyles}
            // {...getFloatingProps()}
          />
        </NavBtnWithDropdown>
      </BtnsContainer>
    </StyledHeader>
  );
};
