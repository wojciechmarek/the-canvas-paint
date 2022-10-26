import {
  Box,
  Divider,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { MenuButton, TopMenuContainer } from './feature-top-menu.styled';
import { useDispatch } from 'react-redux';
import { setToolType } from '@the-canvas-paint/common/store';

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
        shortcut: '⌘,',
      },
      {
        id: 'divider',
      },
      {
        id: 'quit',
        text: 'Quit',
        shortcut: '⌘Q',
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
        shortcut: '⌘N',
      },
      {
        id: 'open',
        text: 'Open',
        shortcut: '⌘O',
      },
      {
        id: 'divider',
      },
      {
        id: 'save',
        text: 'Save',
        shortcut: '⌘S',
      },
      {
        id: 'save-as',
        text: 'Save As',
        shortcut: '⌘⇧S',
      },
      {
        id: 'divider',
      },
      {
        id: 'print',
        text: 'Print',
        shortcut: '⌘P',
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
        shortcut: '⌘X',
      },
      {
        id: 'copy',
        text: 'Copy',
        shortcut: '⌘C',
      },
      {
        id: 'paste',
        text: 'Paste',
        shortcut: '⌘V',
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
        shortcut: 'P',
      },
      {
        id: 'brush',
        text: 'Brush',
        shortcut: 'B',
      },
      {
        id: 'spray',
        text: 'Spray',
        shortcut: 'S',
      },
      {
        id: 'blur',
        text: 'Blur',
        shortcut: 'U',
      },
      {
        id: 'eraser',
        text: 'Eraser',
        shortcut: 'E',
      },
    ],
  },
  {
    id: 'image',
    text: 'Image',
    isBold: false,
    subMenuItems: [
      {
        id: 'rotate-right',
        text: 'Rotate right',
        shortcut: '⌘R',
      },
      {
        id: 'rotate-left',
        text: 'Rotate left',
        shortcut: '⌘⇧R',
      },
      {
        id: 'flip-horizontal',
        text: 'Flip horizontal',
        shortcut: '⌘H',
      },
      {
        id: 'flip-vertical',
        text: 'Flip vertical',
        shortcut: '⌘⇧H',
      },
      {
        id: 'divider',
      },
      {
        id: 'resize',
        text: 'Resize',
        shortcut: '⌘⇧I',
      },
      {
        id: 'crop',
        text: 'Crop',
        shortcut: '⌘⇧C',
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
        id: 'divider',
      },
      {
        id: 'github',
        text: 'Github documentation',
      },
    ],
  },
];

/* eslint-disable-next-line */
export interface TopMenuProps {}

export function TopMenu(props: TopMenuProps) {
  const dispatch = useDispatch();

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [openedMenuId, setOpenedMenuId] = useState<string>('');

  const handleTopMenuItemClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElement(event.currentTarget);
    setOpenedMenuId(event.currentTarget.id);
  };

  const handleSubMenuItemClose = (subMenuItemId: string) => {
    setAnchorElement(null);
    setOpenedMenuId('');
    console.log(`Sub menu item ${subMenuItemId} clicked`);

    switch (subMenuItemId) {
      case 'license':
        window.open('https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt', '_blank');
        break;

      case 'github':
        window.open('https://www.github.com', '_blank');
        break;

      case 'brush':        
        dispatch(setToolType('brush'));
        break;

      case 'pen':
        dispatch(setToolType('pen'));
        break;
      
      case 'spray':
        dispatch(setToolType('spray'));
        break;

      case 'blur':
        dispatch(setToolType('blur'));
        break;

      case 'eraser':
        dispatch(setToolType('eraser'));
        break;

      default:
        break;
    }

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
            onClick={handleTopMenuItemClick}
            isBold={menuItem.isBold}
          >
            {menuItem.text}
          </MenuButton>
          <Menu
            id={menuItem.id}
            anchorEl={anchorElement}
            open={openedMenuId === menuItem.id}
            onClose={handleSubMenuItemClose}
            MenuListProps={{
              'aria-labelledby': menuItem.id,
            }}
          >
            <MenuList sx={{ width: 320, maxWidth: '100%' }}>
              {menuItem.subMenuItems.map((subMenuItem) =>
                subMenuItem.id === 'divider' ? (
                  <Divider />
                ) : (
                  <MenuItem
                    key={subMenuItem.id}
                    onClick={() => handleSubMenuItemClose(subMenuItem.id)}
                  >
                    <ListItemText>{subMenuItem.text}</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      {subMenuItem.shortcut}
                    </Typography>
                  </MenuItem>
                )
              )}
            </MenuList>
          </Menu>
        </>
      ))}
    </TopMenuContainer>
  );
}

export default TopMenu;
