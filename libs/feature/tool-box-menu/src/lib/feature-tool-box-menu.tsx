import {
  RootState,
  setToolColor,
  setToolSize,
  setToolSoftness,
} from '@the-canvas-paint/common/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ColorButtonBase,
  ColorsContainer,
  GrowSpacer,
  PreviewContainer,
  PreviewItem,
  SelectedToolText,
  ToolBoxMenuContainer,
  ToolPropertySection,
  ToolPropertySlider,
  ToolPropertyTitle,
} from './feature-tool-box-menu.styled';
import { colors } from './colors';

export function ToolBoxMenu() {
  const dispatch = useDispatch();

  const { size, softness, color } = useSelector(
    (state: RootState) => state.tool,
  );
  const { x, y } = useSelector((state: RootState) => state.pointer);

  const [selectedToolName, setSelectedToolName] = useState('');
  const [isEraserSelected, setIsEraserSelected] = useState(false);
  const [isPenSelected, setIsPenSelected] = useState(false);
  const [isSpraySelected, setIsSpraySelected] = useState(false);

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
  }, [type]);

  useEffect(() => {
    const isEraser = type === 'eraser';
    const isPen = type === 'pen';
    const isSpray = type === 'spray';

    setIsEraserSelected(isEraser);
    setIsPenSelected(isPen);
    setIsSpraySelected(isSpray);
  }, [type]);

  return (
    <ToolBoxMenuContainer height={'100%'}>
      <SelectedToolText>{selectedToolName}</SelectedToolText>

      <ToolPropertySection>
        <ToolPropertyTitle disabled={isPenSelected}>Size:</ToolPropertyTitle>
        <ToolPropertySlider
          disabled={isPenSelected}
          onChange={handleSizeChange}
          value={isPenSelected ? 0 : size}
        />
      </ToolPropertySection>

      {!isEraserSelected && (
        <ToolPropertySection>
          <ToolPropertyTitle disabled={isPenSelected || isSpraySelected}>
            Softness:
          </ToolPropertyTitle>
          <ToolPropertySlider
            disabled={isPenSelected || isSpraySelected}
            onChange={handleSoftnessChange}
            value={isPenSelected ? 0 : softness}
          />
        </ToolPropertySection>
      )}

      {!isEraserSelected && (
        <ToolPropertySection>
          <ToolPropertyTitle>Colors:</ToolPropertyTitle>
          <ColorsContainer>
            {colors.map((color) => (
              <ColorButtonBase
                key={color}
                style={{
                  background:
                    color === 'rainbow'
                      ? 'linear-gradient(135deg, red, orange, yellow, green, blue, indigo, violet)'
                      : color,
                }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </ColorsContainer>
        </ToolPropertySection>
      )}

      <ToolPropertySection>
        <ToolPropertyTitle>Preview:</ToolPropertyTitle>
        <PreviewContainer>
          <PreviewItem
            size={isPenSelected ? 1 : size}
            color={isEraserSelected ? 'white' : color}
            hardness={
              isPenSelected || isEraserSelected || isSpraySelected
                ? 100
                : 100 - softness
            }
            isRainbow={!isEraserSelected && color === 'rainbow'}
          />
        </PreviewContainer>
      </ToolPropertySection>

      <GrowSpacer />

      <ToolPropertySection>
        <ToolPropertyTitle>Pointer:</ToolPropertyTitle>
        <ToolPropertyTitle>
          X: {x} Y: {y}
        </ToolPropertyTitle>
      </ToolPropertySection>
    </ToolBoxMenuContainer>
  );
}

export default ToolBoxMenu;
