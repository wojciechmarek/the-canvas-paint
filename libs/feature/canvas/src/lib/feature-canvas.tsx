import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

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
  const canvasRef = useRef();

  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });


  const handleDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    console.log(e);
  };

  const handleUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    console.log(e);
  };

  const handleEnter = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    console.log(e);
  };

  const handleMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setPointerPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    context?.canvas?.setAttribute('width', '1024');
    context?.canvas?.setAttribute('height', '768');

    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  }, []);

  return (
    <CanvasWrapper>
      <CanvasContainer>
        <CanvasArea ref={canvasRef} onMouseDown={handleDown} onMouseUp={handleUp} onMouseEnter={handleEnter} onMouseMove={handleMove} />
      </CanvasContainer>
    </CanvasWrapper>
  );
}

export default Canvas;
