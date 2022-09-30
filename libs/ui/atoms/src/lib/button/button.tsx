import { ButtonProps } from './button.interface';
import { MaterialButton } from './button.styled';

export function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <MaterialButton {...rest}>
      {children}
    </MaterialButton>
  );
};
