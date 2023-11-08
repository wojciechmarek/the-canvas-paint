import styled from '@emotion/styled';
import { Box, ButtonBase } from '@mui/material';

export const BottomMenuContainer = styled(Box)`
  height: 40px;
  background-color: #1a181b;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const MenuButton = styled(ButtonBase)<{
  isSelected?: boolean;
}>`
  color: white;
  text-transform: none;
  height: 36px;
  width: 36px;
  border-radius: 4px;

  ${(props) =>
    props.isSelected &&
    `
    background-color: #312937;
  `}
`;
