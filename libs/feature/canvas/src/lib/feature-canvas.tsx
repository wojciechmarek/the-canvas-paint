// disable eslint for this file
/* eslint-disable */

// disable null check for this file
/* eslint-disable @typescript-eslint/no-non-null-assertion */

// disable errors for this file
/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { RootState, setPointer } from '@the-canvas-paint/common/store';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface CanvasProps {}

const CanvasWrapper = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #312937;
  overflow: auto;
`;

const CanvasContainer = styled(Box)`
  border: 1px solid #000;
`;

const CanvasArea = styled.canvas`
  cursor: crosshair;
`;

export function Canvas(props: CanvasProps) {
  const { color, size } = useSelector((state: RootState) => state.tool);

  const [isDrawingProcess, setIsDrawingProcess] = useState(false);

  const dispatch = useDispatch();
  const canvasRef = useRef(null);

  let context: CanvasRenderingContext2D | null = null;
  
  const canvas = canvasRef.current as unknown as HTMLCanvasElement;
  if (canvas) {
    context = canvas.getContext('2d');
  }

  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  const handleDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.buttons === 1) {
      context?.beginPath();
      setIsDrawingProcess(true);
    }
  };

  const handleUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.buttons === 0) {
      context?.closePath();
      setIsDrawingProcess(false);
    }
  };

  const handleMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const coords = { x: e.clientX, y: e.clientY };
    dispatch(setPointer(coords));
    setPointerPosition(coords);

    if (isDrawingProcess) {
      context?.moveTo(pointerPosition.x, pointerPosition.y);
      context?.lineTo(coords.x, coords.y);
      context?.stroke();
    }
  };

  useEffect(() => {
    context?.canvas?.setAttribute('width', '1024');
    context?.canvas?.setAttribute('height', '768');

    if (context) {
      context.fillStyle = '#FFFFFF';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, []);

  useEffect(() => {
    if (context) {
      context.lineWidth = size;
      context.lineCap = 'round';
      context.strokeStyle = color
    }
  }, [color, size]);

  return (
    <CanvasWrapper>
      <CanvasContainer>
        <CanvasArea
          ref={canvasRef}
          onMouseDown={handleDown}
          onMouseUp={handleUp}
          onMouseMove={handleMove}
        />
      </CanvasContainer>
    </CanvasWrapper>
  );
}

export default Canvas;
