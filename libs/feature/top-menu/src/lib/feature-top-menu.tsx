// disable lint for this file
/* eslint-disable */

import {
  Divider,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';
import { Fragment, useState } from 'react';
import { MenuButton, TopMenuContainer } from './feature-top-menu.styled';
import { useDispatch } from 'react-redux';
import { setToolType } from '@the-canvas-paint/common/store';

const menuItems = [
  {
    id: 'app-name',
    text: 'The Canvas Paint',
    isbold: true,
    subMenuItems: [
      {
        id: 'about',
        text: 'About the Canvas Paint',
        isDisabled: true,
      },
      {
        id: 'preferences',
        text: 'Preferences',
        shortcut: '⌘,',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'quit',
        text: 'Quit',
        shortcut: '⌘Q',
        isDisabled: true,
      },
    ],
  },
  {
    id: 'file',
    text: 'File',
    isbold: false,
    subMenuItems: [
      {
        id: 'new',
        text: 'New',
        shortcut: '⌘N',
        isDisabled: true,
      },
      {
        id: 'open',
        text: 'Open',
        shortcut: '⌘O',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'save',
        text: 'Save',
        shortcut: '⌘S',
        isDisabled: true,
      },
      {
        id: 'save-as',
        text: 'Save As',
        shortcut: '⌘⇧S',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'print',
        text: 'Print',
        shortcut: '⌘P',
        isDisabled: true,
      },
    ],
  },
  {
    id: 'edit',
    text: 'Edit',
    isbold: false,
    subMenuItems: [
      {
        id: 'cut',
        text: 'Cut',
        shortcut: '⌘X',
        isDisabled: true,
      },
      {
        id: 'copy',
        text: 'Copy',
        shortcut: '⌘C',
        isDisabled: true,
      },
      {
        id: 'paste',
        text: 'Paste',
        shortcut: '⌘V',
        isDisabled: true,
      },
    ],
  },
  {
    id: 'tools',
    text: 'Tools',
    isbold: false,
    subMenuItems: [
      {
        id: 'pen',
        text: 'Pen',
        shortcut: 'P',
        isDisabled: true,
      },
      {
        id: 'brush',
        text: 'Brush',
        shortcut: 'B',
        isDisabled: true,
      },
      {
        id: 'spray',
        text: 'Spray',
        shortcut: 'S',
        isDisabled: true,
      },
      {
        id: 'blur',
        text: 'Blur',
        shortcut: 'U',
        isDisabled: true,
      },
      {
        id: 'eraser',
        text: 'Eraser',
        shortcut: 'E',
        isDisabled: true,
      },
    ],
  },
  {
    id: 'image',
    text: 'Image',
    isbold: false,
    subMenuItems: [
      {
        id: 'rotate-right',
        text: 'Rotate right',
        shortcut: '⌘R',
        isDisabled: true,
      },
      {
        id: 'rotate-left',
        text: 'Rotate left',
        shortcut: '⌘⇧R',
        isDisabled: true,
      },
      {
        id: 'flip-horizontal',
        text: 'Flip horizontal',
        shortcut: '⌘H',
        isDisabled: true,
      },
      {
        id: 'flip-vertical',
        text: 'Flip vertical',
        shortcut: '⌘⇧H',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'resize',
        text: 'Resize',
        shortcut: '⌘⇧I',
        isDisabled: true,
      },
      {
        id: 'crop',
        text: 'Crop',
        shortcut: '⌘⇧C',
        isDisabled: true,
      },
    ],
  },
  {
    id: 'help',
    text: 'Help',
    isbold: false,
    subMenuItems: [
      {
        id: 'license',
        text: 'License',
        isDisabled: true,
      },
      {
        id: 'privacy',
        text: 'Privacy',
        isDisabled: true,
      },
      {
        id: 'divider',
      },
      {
        id: 'github',
        text: 'Github documentation',
        isDisabled: true,
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
      {menuItems.map((menuItem, key) => (
        <Fragment key={`${menuItem.id}-${key}`}>
          <MenuButton
            key={menuItem.id}
            id={menuItem.id}
            aria-controls={
              openedMenuId === menuItem.id ? menuItem.id : undefined
            }
            aria-haspopup="true"
            aria-expanded={openedMenuId === menuItem.id ? 'true' : undefined}
            onClick={handleTopMenuItemClick}
            isbold={menuItem.isbold.toString()}
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
              {menuItem.subMenuItems.map((subMenuItem, key) =>
                subMenuItem.id === 'divider' ? (
                  <Divider key={`${subMenuItem.id}-${key}`} />
                ) : (
                  <MenuItem
                    key={subMenuItem.id}
                    onClick={() => handleSubMenuItemClose(subMenuItem.id)}
                    disabled={subMenuItem.isDisabled || false}
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
        </Fragment>
      ))}
    </TopMenuContainer>
  );
}

export default TopMenu;
