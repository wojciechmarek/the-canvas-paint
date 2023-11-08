import {
  CanvasArea,
  CanvasContainer,
  CanvasWrapper,
} from './feature-canvas.styled';
import { useCanvas } from './feature-canvas.hook';

export function Canvas() {
  const { canvasRef, handleDown, handleMove, handleUp } = useCanvas();

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
