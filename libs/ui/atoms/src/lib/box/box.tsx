import { TcpBoxProps } from './box.interface';
import { MaterialBox } from './box.styled';

export function Box(props: TcpBoxProps) {
  const { children, ...rest } = props;
  return (
    <MaterialBox {...rest}>
      {children}
    </MaterialBox>
  );
};
