import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const CanvasWrapper = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #312937;
  overflow: auto;
`;

export const CanvasContainer = styled(Box)`
  border: 1px solid #000;
  position: relative;
`;

export const CanvasArea = styled.canvas`
  cursor: crosshair;
  height: 768px;
  width: 1024px;
  background-color: #fff;
`;
