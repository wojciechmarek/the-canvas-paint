import { styled } from "@mui/material";
import { Box } from "@the-canvas-paint/ui/atoms";

/* eslint-disable-next-line */
export interface ColorsMenuProps {}

const ColorsMenuContainer = styled(Box)`
  color: pink;
  height: 75px;
  border-top: 1px solid black;
`;

export function ColorsMenu(props: ColorsMenuProps) {
  return (
    <ColorsMenuContainer>
      <p>Welcome to FeatureColorsMenu!</p>
    </ColorsMenuContainer>
  );
}

export default ColorsMenu;
