import { RootState, setPointer } from '@the-canvas-paint/common/store';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useCanvas = () => {
  const { color, size, type, softness } = useSelector(
    (state: RootState) => state.tool,
  );

  const [isDrawingProcess, setIsDrawingProcess] = useState(false);
  const [isSpray, setIsSpray] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isRainbowColor, setIsRainbowColor] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  const dispatch = useDispatch();
  const canvasRef = useRef(null);

  let context: CanvasRenderingContext2D | null = null;

  const canvas = canvasRef.current as unknown as HTMLCanvasElement;
  if (canvas) {
    context = canvas.getContext('2d');
  }

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
    if (!context) {
      return;
    }

    const coords = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
    dispatch(setPointer(coords));
    setPointerPosition(coords);
    setCounter(counter + 1);

    if (isDrawingProcess) {
      context.moveTo(pointerPosition.x, pointerPosition.y);
      context.lineTo(coords.x, coords.y);

      if (isSpray) {
        generateSprayPoints(context, e);
      } else {
        context.stroke();
      }

      if (softness > 0 && type !== 'eraser') {
        context.shadowColor = color;
        context.shadowBlur = softness / 5;
        context.fill();
      } else {
        context.shadowBlur = 0;
      }

      if (context && isRainbowColor) {
        context.shadowColor = `hsl(${counter % 360}, 100%, 50%)`;
        context.strokeStyle = `hsl(${counter % 360}, 100%, 50%)`;
      }
    }
  };

  useEffect(() => {
    context?.canvas?.setAttribute('width', '1024');
    context?.canvas?.setAttribute('height', '768');

    if (context) {
      context.lineWidth = 10;
      context.fillStyle = '#FFFFFF';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, [context?.canvas?.width, context?.canvas?.height, context]);

  useEffect(() => {
    if (context) {
      context.lineWidth = size;
      context.lineCap = 'round';
      context.strokeStyle = type === 'eraser' ? '#FFFFFF' : color;
    }
  }, [size, type, color, context]);

  useEffect(() => {
    if (type === 'spray') {
      setIsSpray(true);
    } else {
      setIsSpray(false);
    }

    if (type === 'pen') {
      if (context) {
        context.lineWidth = 1;
      }
    }
  }, [type, context]);

  useEffect(() => {
    if (type !== 'eraser' && color === 'rainbow') {
      setIsRainbowColor(true);
    } else {
      setIsRainbowColor(false);
    }
  }, [color, type, context]);

  return {
    canvasRef,
    handleDown,
    handleMove,
    handleUp,
  };
};

const generateSprayPoints = (
  context: CanvasRenderingContext2D | null,
  e: React.MouseEvent<HTMLCanvasElement>,
) => {
  const amountOfPoints = 20;

  if (!context) {
    return;
  }

  for (let i = 0; i < amountOfPoints; i++) {
    const offset = getRandomOffset(context.lineWidth * 2);
    const x = e.nativeEvent.offsetX + offset.x;
    const y = e.nativeEvent.offsetY + offset.y;

    context.fillStyle = context.strokeStyle;
    context.fillRect(x, y, 1, 1);
  }
};

const getRandomOffset = (radius: number) => {
  const randomAngle = (Math.random() + radius / 10) * (2 * Math.PI);
  const randomRadius = Math.random() * radius;

  return {
    x: Math.cos(randomAngle) * randomRadius,
    y: Math.sin(randomRadius) * randomAngle,
  };
};
