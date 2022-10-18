import './global-styles-reset.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { styled } from '@mui/material';
import { TopMenu } from '@the-canvas-paint/feature/top-menu';
import { Canvas } from '@the-canvas-paint/feature/canvas';
import { Provider } from 'react-redux';

import { ToolBoxMenu } from '@the-canvas-paint/feature/tool-box-menu';
import { BottomMenu } from '@the-canvas-paint/feature/bottom-menu';
import { store } from '@the-canvas-paint/common/store';

/* eslint-disable-next-line */
export interface FeatureLayoutProps {}

const LayoutContainer = styled('div')`
  height: 100vh;
`;
const TopMenuCanvasColorsMenuContainer = styled('div')`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
`;

export function Layout(props: FeatureLayoutProps) {
  return (
    <Provider store={store}>
      <LayoutContainer>
        <TopMenu />
        <TopMenuCanvasColorsMenuContainer>
          <ToolBoxMenu />
          <Canvas />
        </TopMenuCanvasColorsMenuContainer>
        <BottomMenu />
      </LayoutContainer>
    </Provider>
  );
}

export default Layout;
