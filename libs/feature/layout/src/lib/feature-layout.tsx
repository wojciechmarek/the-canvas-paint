import './global-styles-reset.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Stack, styled } from '@mui/material';
import { TopMenu } from '@the-canvas-paint/feature/top-menu';
import { Canvas } from '@the-canvas-paint/feature/canvas';

import { ToolBoxMenu } from '@the-canvas-paint/feature/tool-box-menu';
import { ColorsMenu } from '@the-canvas-paint/feature/colors-menu';

/* eslint-disable-next-line */
export interface FeatureLayoutProps {}

const LayoutContainer = styled(Stack)``;
const ToolBoxAndCanvasContainer = styled(Stack)``;

export function Layout(props: FeatureLayoutProps) {
  return (
    <LayoutContainer height={'100vh'}>
      <TopMenu />
      <ToolBoxAndCanvasContainer direction="row" flex={1}>
        <ToolBoxMenu />
        <Canvas />
      </ToolBoxAndCanvasContainer>
      <ColorsMenu />

    </LayoutContainer>
  );
}

export default Layout;
