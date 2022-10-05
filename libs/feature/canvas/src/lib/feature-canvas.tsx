import styled from '@emotion/styled';
import { Box } from '@mui/material';

/* eslint-disable-next-line */
export interface CanvasProps {}

const CanvasContainer = styled(Box)`
  flex: 1;
`

const CanvasArea = styled.canvas`
  width: 100%;
  height: 100%;
`

export function Canvas(props: CanvasProps) {
  return (
    <CanvasContainer>
      <CanvasArea />
    </CanvasContainer>
  );
}

export default Canvas;
