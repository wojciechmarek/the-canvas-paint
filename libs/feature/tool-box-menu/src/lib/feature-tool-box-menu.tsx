import styled from '@emotion/styled';
import { Box, ButtonBase, Slider, Typography } from '@mui/material';
import { RootState, setToolColor, setToolSize, setToolSoftness } from '@the-canvas-paint/common/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'black',
  'white',
];

/* eslint-disable-next-line */
export interface ToolBoxMenuProps {}

const ToolBoxMenuContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #252327;
`;

const SelectedToolText = styled(Typography)`
  color: white;
  font-size: 24px;
  padding: 10px;
  font-weight: bold;
`;

const ToolPropertySection = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ToolPropertyTitle = styled(Typography)`
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: start;
`;

const ToolPropertySlider = styled(Slider)`
  width: 90%;
  color: white;
  margin: 0 auto;
`;

const ColorsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1px;
  margin: 5px 0;
`;

const ColorButtonBase = styled(ButtonBase)`
  height: 35px;
  width: 35px;
  border-radius: 0.25em;
`;

const PreviewContainer = styled(Box)`
  height: 100px;
  width: 100%;
  background-color: white;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PreviewItem = styled(Box)<{
  size?: number;
  color?: string;
}>`
  height: ${(props) => props.size || 1}px;
  width: ${(props) => props.size || 1}px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color || 'white'};
`;

const GrowSpacer = styled(Box)`
  flex-grow: 1;
`;

export function ToolBoxMenu(props: ToolBoxMenuProps) {
  const dispatch = useDispatch();

  const { size, softness, color } = useSelector((state: RootState) => state.tool);

  const [selectedToolName, setSelectedToolName] = useState('');
  const [isPaintingToolTypeSelected, setIsPaintingToolTypeSelected] =
    useState(false);

  const { type } = useSelector((state: RootState) => state.tool);

  const handleColorClick = (color: string) => {
    dispatch(setToolColor(color));
  };

  const handleSizeChange = (e: any, value: number | number[]) => {
    dispatch(setToolSize(value as number));
  };

  const handleSoftnessChange = (e: any, value: number | number[]) => {
    dispatch(setToolSoftness(value as number));
  };



  useEffect(() => {
    switch (type) {
      case 'pen':
        setSelectedToolName('Pen');
        break;
      case 'eraser':
        setSelectedToolName('Eraser');
        break;
      case 'brush':
        setSelectedToolName('Brush');
        break;
      case 'blur':
        setSelectedToolName('Blur');
        break;
      case 'spray':
        setSelectedToolName('Spray');
        break;
    }

    const isPaintingToolTypeSelected = type !== 'eraser';
    setIsPaintingToolTypeSelected(isPaintingToolTypeSelected);
  }, [type]);

  return (
    <ToolBoxMenuContainer height={'100%'}>
      <SelectedToolText>{selectedToolName}</SelectedToolText>

      <ToolPropertySection>
        <ToolPropertyTitle>Size:</ToolPropertyTitle>
        <ToolPropertySlider onChange={handleSizeChange} value={size} />
      </ToolPropertySection>

      {isPaintingToolTypeSelected && (
        <ToolPropertySection>
          <ToolPropertyTitle>Softness:</ToolPropertyTitle>
          <ToolPropertySlider onChange={handleSoftnessChange} value={softness} />
        </ToolPropertySection>
      )}

      {isPaintingToolTypeSelected && (
        <ToolPropertySection>
          <ToolPropertyTitle>Colors:</ToolPropertyTitle>
          <ColorsContainer>
            {colors.map((color) => (
              <ColorButtonBase
                key={color}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </ColorsContainer>
        </ToolPropertySection>
      )}

      <ToolPropertySection>
        <ToolPropertyTitle>Preview:</ToolPropertyTitle>
        <PreviewContainer>
          <PreviewItem size={size} color={color} />
        </PreviewContainer>
      </ToolPropertySection>

      <GrowSpacer />

      <ToolPropertySection>
        <ToolPropertyTitle>Pointer:</ToolPropertyTitle>
        <ToolPropertyTitle>X: 123 Y: 3442</ToolPropertyTitle>
      </ToolPropertySection>
    </ToolBoxMenuContainer>
  );
}

export default ToolBoxMenu;
