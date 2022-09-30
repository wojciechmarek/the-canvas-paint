import './global-styles-reset.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import styled from '@emotion/styled';
import { Box, Button } from '@the-canvas-paint/ui/atoms';

/* eslint-disable-next-line */
export interface FeatureLayoutProps {}

const LayoutContainer = styled.div`
  height: 100vh;
`;
  
export function Layout(props: FeatureLayoutProps) {
  return (
    <LayoutContainer>
      <Box>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Box>
    </LayoutContainer>
  );
}

export default Layout;
