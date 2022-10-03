import { styled } from "@mui/material";
import { Box, Button } from "@the-canvas-paint/ui/atoms";

const predefinedColors = [
  '#000000',
  '#808080',
  '#800000',
  '#808000',
  '#008000',
  '#008080',
  '#000080',
  '#800080',
  '#ffffff',
  '#c0c0c0',
  '#ff0000',
  '#ffff00',
  '#00ff00',
  '#00ffff',
  '#0000ff',
  '#ff00ff',
];

/* eslint-disable-next-line */
export interface ColorsMenuProps {}

const ColorsMenuContainer = styled(Box)`
  color: pink;
  height: 70px;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
`;

const ColorsContent = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const SelectedColor = styled(Button)`
  width: 47.5px;
  height: 47.5px;
  border: 1px solid black;
  background-color: red;
`;

const Palette = styled('div')`
  display: grid;
  gap: 2.5px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-left: 10px;

`;

const PaletteColor = styled(Button)`
  width: 22.5px;
  height: 22.5px;
  border: 1px solid black;
`;

export function ColorsMenu(props: ColorsMenuProps) {
  return (
    <ColorsMenuContainer>
      <ColorsContent>
        <SelectedColor />
        <Palette>
          {predefinedColors.map((color) => (
            <PaletteColor onClick={() => alert(color)} key={color} sx={{backgroundColor: color}} />
          ))}
        </Palette>
      </ColorsContent>
      
    </ColorsMenuContainer>
  );
}

export default ColorsMenu;
