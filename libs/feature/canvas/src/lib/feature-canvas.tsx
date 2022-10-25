import styled from '@emotion/styled';
import { Box } from '@mui/material';

/* eslint-disable-next-line */
export interface CanvasProps {}

const CanvasContainer = styled(Box)`
  flex: 1;
  background-color: #1E1E1E;
`

const CanvasArea = styled.canvas`
  height: 480px;
  width: 600px !important;
  background-color: white;
`

export function Canvas(props: CanvasProps) {
  return (
    <CanvasContainer>
      <CanvasArea />
    </CanvasContainer>
  );
}

export default Canvas;
