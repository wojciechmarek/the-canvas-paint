import styled from '@emotion/styled';
import { Box, ButtonBase,  } from '@mui/material';

/* eslint-disable-next-line */
export interface BottomMenuProps {}

const BottomMenuContainer = styled(Box)`
  height: 40px;
  background-color: #1A181B;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled(ButtonBase)`
  color: white;
  text-transform: none;
  height: 36px;
  width: 36px;
  border-radius: 4px;
`;

export function BottomMenu(props: BottomMenuProps) {
  return (
    <BottomMenuContainer>
      <MenuButton>P</MenuButton>
      <MenuButton>B</MenuButton>
      <MenuButton>S</MenuButton>
      <MenuButton>U</MenuButton>
      <MenuButton>E</MenuButton>
    </BottomMenuContainer>
  );
}

export default BottomMenu;
