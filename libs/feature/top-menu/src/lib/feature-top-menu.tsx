import { Menu, MenuItem, MenuList, Paper } from '@mui/material';
import { useState } from 'react';
import { MenuButton, TopMenuContainer } from './feature-top-menu.styled';

const menuItems = [
  {
    id: 'app-name',
    text: 'The Canvas Paint',
    isBold: true,
    subMenuItems: [
      {
        id: 'about',
        text: 'About the Canvas Paint',
      },
      {
        id: 'preferences',
        text: 'Preferences',
      },
      {
        id: 'quit',
        text: 'Quit',
      },
    ],
  },
  {
    id: 'file',
    text: 'File',
    isBold: false,
    subMenuItems: [
      {
        id: 'new',
        text: 'New',
      },
      {
        id: 'open',
        text: 'Open',
      },
      {
        id: 'save',
        text: 'Save',
      },
      {
        id: 'save-as',
        text: 'Save As',
      },
    ],
  },
  {
    id: 'edit',
    text: 'Edit',
    isBold: false,
    subMenuItems: [
      {
        id: 'cut',
        text: 'Cut',
      },
      {
        id: 'copy',
        text: 'Copy',
      },
      {
        id: 'paste',
        text: 'Paste',
      },
    ],
  },
  {
    id: 'tools',
    text: 'Tools',
    isBold: false,
    subMenuItems: [
      {
        id: 'pen',
        text: 'Pen',
      },
      {
        id: 'brush',
        text: 'Brush',
      },
      {
        id: 'spray',
        text: 'Spray',
      },
      {
        id: 'eraser',
        text: 'Eraser',
      },
    ],
  },
  {
    id: 'help',
    text: 'Help',
    isBold: false,
    subMenuItems: [
      {
        id: 'license',
        text: 'License',
      },
      {
        id: 'privacy',
        text: 'Privacy',
      },
      {
        id: 'github',
        text: 'Github',
      },
    ],
  },
];

/* eslint-disable-next-line */
export interface TopMenuProps {}

export function TopMenu(props: TopMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openedMenuId, setOpenedMenuId] = useState<string>('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('handleClick', event.currentTarget);

    setAnchorEl(event.currentTarget);
    setOpenedMenuId(event.currentTarget.id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedMenuId('');
  };

  return (
    <TopMenuContainer>
      {menuItems.map((menuItem) => (
        <>
          <MenuButton
            key={menuItem.id}
            id={menuItem.id}
            aria-controls={
              openedMenuId === menuItem.id ? menuItem.id : undefined
            }
            aria-haspopup="true"
            aria-expanded={openedMenuId === menuItem.id ? 'true' : undefined}
            onClick={handleClick}
            isBold={menuItem.isBold}
          >
            {menuItem.text}
          </MenuButton>
          <Menu
            id={menuItem.id}
            anchorEl={anchorEl}
            open={openedMenuId === menuItem.id}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': menuItem.id,
            }}
          >
            <Paper sx={{ width: 320, maxWidth: '100%' }}>
              <MenuList>
                {menuItem.subMenuItems.map((subMenuItem) => (
                  <MenuItem key={subMenuItem.id} onClick={handleClose}>
                    {subMenuItem.text}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Menu>
        </>
      ))}
    </TopMenuContainer>
  );
}

export default TopMenu;
