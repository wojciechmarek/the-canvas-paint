import styled from '@emotion/styled';
import { Box, ButtonBase, Slider, Typography } from '@mui/material';
import { RootState } from '@the-canvas-paint/common/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface ToolBoxMenuProps {}

const ToolBoxMenuContainer = styled(Box)`
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
`;

export function ToolBoxMenu(props: ToolBoxMenuProps) {
  const [selectedToolName, setSelectedToolName] = useState('');

  const { selected } = useSelector((state: RootState) => state.tool);

  useEffect(() => {
    switch (selected) {
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
  }, [selected]);

  return (
    <ToolBoxMenuContainer height={'100%'}>
      <SelectedToolText>{selectedToolName}</SelectedToolText>

      <ToolPropertySection>
        <ToolPropertyTitle>Size:</ToolPropertyTitle>
        <ToolPropertySlider />
      </ToolPropertySection>

      {selected !== 'eraser' && (
        <ToolPropertySection>
          <ToolPropertyTitle>Softness:</ToolPropertyTitle>
          <ToolPropertySlider />
        </ToolPropertySection>
      )}

      {selected !== 'eraser' && (
        <ToolPropertySection>
          <ToolPropertyTitle>Colors:</ToolPropertyTitle>
          <ColorsContainer>
            <ColorButtonBase style={{ backgroundColor: 'red' }} />
            <ColorButtonBase style={{ backgroundColor: 'blue' }} />
            <ColorButtonBase style={{ backgroundColor: 'green' }} />
            <ColorButtonBase style={{ backgroundColor: 'yellow' }} />
            <ColorButtonBase style={{ backgroundColor: 'orange' }} />
            <ColorButtonBase style={{ backgroundColor: 'purple' }} />
            <ColorButtonBase style={{ backgroundColor: 'pink' }} />
            <ColorButtonBase style={{ backgroundColor: 'brown' }} />
            <ColorButtonBase style={{ backgroundColor: 'black' }} />
            <ColorButtonBase style={{ backgroundColor: 'white' }} />
          </ColorsContainer>
        </ToolPropertySection>
      )}

      <ToolPropertySection>
        <ToolPropertyTitle>Preview:</ToolPropertyTitle>
        <PreviewContainer />
      </ToolPropertySection>
    </ToolBoxMenuContainer>
  );
}

export default ToolBoxMenu;
