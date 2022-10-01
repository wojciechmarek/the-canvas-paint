import { BoxProps } from './box.interface';
import { MaterialBox } from './box.styled';

export function Box(props: BoxProps) {
  const { children, ...rest } = props;
  return (
    <MaterialBox {...rest}>
      {children}
    </MaterialBox>
  );
};
