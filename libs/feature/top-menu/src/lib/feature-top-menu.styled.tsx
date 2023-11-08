import { Box, Button, styled } from '@mui/material';

export const TopMenuContainer = styled(Box)`
  background-color: #1a181b;
  padding: 0 10px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuButton = styled(Button)<{
  isbold: string;
}>`
  color: white;
  text-transform: none;
  font-weight: ${(props) => (props.isbold === 'true' ? 'bold' : 'normal')};
`;
