import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { RootState } from '@the-canvas-paint/common/store';
import { useSelector } from 'react-redux';

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
  const { selected } = useSelector((state: RootState) => state.tool);

  return (
    <ToolBoxMenuContainer height={'100%'}>
      <SelectedToolText>
        {selected}
      </SelectedToolText>
    </ToolBoxMenuContainer>
  );
}

export default ToolBoxMenu;
