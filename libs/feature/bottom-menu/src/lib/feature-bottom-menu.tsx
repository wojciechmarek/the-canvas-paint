import styled from '@emotion/styled';
import { Box, ButtonBase } from '@mui/material';

/* eslint-disable-next-line */
export interface BottomMenuProps {}

const BottomMenuContainer = styled(Box)`
  height: 40px;
  background-color: #1a181b;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled(ButtonBase)`
  color: white;
  text-transform: none;
  height: 36px;
  width: 36px;
  border-radius: 4px;
`;

export function BottomMenu(props: BottomMenuProps) {
  return (
    <BottomMenuContainer>
      <MenuButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-pen-line"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>{' '}
      </MenuButton>
      <MenuButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-brush"
        >
          <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
          <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
        </svg>
      </MenuButton>
      <MenuButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-spray-can"
        >
          <path d="M3 3h.01" />
          <path d="M7 5h.01" />
          <path d="M11 7h.01" />
          <path d="M3 7h.01" />
          <path d="M7 9h.01" />
          <path d="M3 11h.01" />
          <rect width="4" height="4" x="15" y="5" />
          <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
          <path d="m13 14 8-2" />
          <path d="m13 19 8-2" />
        </svg>
      </MenuButton>
      <MenuButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-hand-metal"
        >
          <path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
          <path d="M14 11V9a2 2 0 1 0-4 0v2" />
          <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
          <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
        </svg>
      </MenuButton>
      <MenuButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-eraser"
        >
          <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
          <path d="M22 21H7" />
          <path d="m5 11 9 9" />
        </svg>
      </MenuButton>
    </BottomMenuContainer>
  );
}

export default BottomMenu;
