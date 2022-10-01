import { IconButtonProps } from './icon-button.interface';
import { MaterialIconButton} from './icon-button.styled';

export function IconButton(props: IconButtonProps) {
  const { children, ...rest } = props;
  return (
    <MaterialIconButton {...rest}>
      {children}
    </MaterialIconButton>
  );
};
