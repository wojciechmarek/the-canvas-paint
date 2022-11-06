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
    isBold: true,
    subMenuItems: [
      {
        id: 'about',
        text: 'About the Canvas Paint',
        isDisabled: false,
      },
      {
        id: 'preferences',
        text: 'Preferences',
        shortcut: '⌘,',
        isDisabled: false,
      },
      {
        id: 'divider',
      },
      {
        id: 'quit',
        text: 'Quit',
        shortcut: '⌘Q',
        isDisabled: false,
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
        isDisabled: false,
      },
      {
        id: 'open',
        text: 'Open',
        shortcut: '⌘O',
        isDisabled: false,
      },
      {
        id: 'divider',
      },
      {
        id: 'save',
        text: 'Save',
        shortcut: '⌘S',
        isDisabled: false,
      },
      {
        id: 'save-as',
        text: 'Save As',
        shortcut: '⌘⇧S',
        isDisabled: false,
      },
      {
        id: 'divider',
      },
      {
        id: 'print',
        text: 'Print',
        shortcut: '⌘P',
        isDisabled: false,
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
        isDisabled: false,
      },
      {
        id: 'copy',
        text: 'Copy',
        shortcut: '⌘C',
        isDisabled: false,
      },
      {
        id: 'paste',
        text: 'Paste',
        shortcut: '⌘V',
        isDisabled: false,
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
        isDisabled: false,
      },
      {
        id: 'brush',
        text: 'Brush',
        shortcut: 'B',
        isDisabled: false,
      },
      {
        id: 'spray',
        text: 'Spray',
        shortcut: 'S',
        isDisabled: false,
      },
      {
        id: 'blur',
        text: 'Blur',
        shortcut: 'U',
        isDisabled: false,
      },
      {
        id: 'eraser',
        text: 'Eraser',
        shortcut: 'E',
        isDisabled: false,
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
        isDisabled: false,
      },
      {
        id: 'rotate-left',
        text: 'Rotate left',
        shortcut: '⌘⇧R',
        isDisabled: false,
      },
      {
        id: 'flip-horizontal',
        text: 'Flip horizontal',
        shortcut: '⌘H',
        isDisabled: false,
      },
      {
        id: 'flip-vertical',
        text: 'Flip vertical',
        shortcut: '⌘⇧H',
        isDisabled: false,
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
    isBold: false,
    subMenuItems: [
      {
        id: 'license',
        text: 'License',
        isDisabled: false,
      },
      {
        id: 'privacy',
        text: 'Privacy',
        isDisabled: false,
      },
      {
        id: 'divider',
      },
      {
        id: 'github',
        text: 'Github documentation',
        isDisabled: false,
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
            isbold={menuItem.isBold.toString()}
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
