import styled from '@emotion/styled';
import { Box, ButtonBase, Slider, Typography } from '@mui/material';

export const ToolBoxMenuContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #252327;
`;

export const SelectedToolText = styled(Typography)`
  color: white;
  font-size: 24px;
  padding: 10px;
  font-weight: bold;
`;

export const ToolPropertySection = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ToolPropertyTitle = styled(Typography)<{
  disabled?: boolean;
}>`
  color: ${(props) => (props.disabled ? 'gray' : 'white')};
  font-size: 14px;
  font-weight: bold;
  text-align: start;
`;

export const ToolPropertySlider = styled(Slider)`
  width: 90%;
  color: white;
  margin: 0 auto;
`;

export const ColorsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1px;
  margin: 5px 0;
`;

export const ColorButtonBase = styled(ButtonBase)`
  height: 35px;
  width: 35px;
  border-radius: 0.25em;
`;

export const PreviewContainer = styled(Box)`
  height: 110px;
  width: 100%;
  background-color: white;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviewItem = styled(Box)<{
  size?: number;
  color?: string;
  hardness?: number;
  isRainbow?: boolean;
}>`
  height: ${(props) => props.size ?? 1}px;
  width: ${(props) => props.size ?? 1}px;
  border-radius: 50%;
  border: 1px solid black;
  background: ${(props) =>
    props.isRainbow
      ? `linear-gradient(135deg, red, orange, yellow, green, blue, indigo, violet)`
      : `radial-gradient(circle, ${props.color} ${props.hardness}%, rgba(255,255,255,1) 100%)`};
`;

export const GrowSpacer = styled(Box)`
  flex-grow: 1;
`;
