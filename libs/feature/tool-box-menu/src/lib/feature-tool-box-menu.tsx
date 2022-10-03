import styled from '@emotion/styled';
import { Box } from '@the-canvas-paint/ui/atoms';

/* eslint-disable-next-line */
export interface ToolBoxMenuProps {}

const ToolBoxMenuContainer = styled(Box)`
  width: 100px;
  border-right: 1px solid black;
  padding-top: 30px;
`

export function ToolBoxMenu(props: ToolBoxMenuProps) {
  return (
    <ToolBoxMenuContainer>
      <p>Toolbox</p>
    </ToolBoxMenuContainer>
  );
}

export default ToolBoxMenu;
