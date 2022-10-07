
import { Box, Button, styled } from "@mui/material";

export const TopMenuContainer = styled(Box)`
  background-color:#1A181B;
  padding: 0 10px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuButton = styled(Button)<{
  isBold: boolean;
}>`
  color: white;
  text-transform: none;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
`;


