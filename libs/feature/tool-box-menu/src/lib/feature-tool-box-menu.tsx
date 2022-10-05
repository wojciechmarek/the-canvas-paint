import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface ToolBoxMenuProps {}

const ToolBoxMenuContainer = styled(Box)`
  width: 200px;
  background-color: #252327;
`

const SelectedToolText = styled(Typography)`
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  font-weight: bold;
`

export function ToolBoxMenu(props: ToolBoxMenuProps) {
  return (
    <ToolBoxMenuContainer height={'100%'}>
      <SelectedToolText>
        Brush
      </SelectedToolText>
    </ToolBoxMenuContainer>
  );
}

export default ToolBoxMenu;
