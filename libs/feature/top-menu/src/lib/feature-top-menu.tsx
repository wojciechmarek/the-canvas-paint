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
import { Fragment, useEffect, useState } from 'react';
import { MenuButton, TopMenuContainer } from './feature-top-menu.styled';
import { useDispatch } from 'react-redux';
import { setToolType } from '@the-canvas-paint/common/store';
import { menuItems } from './menu-items';

/* eslint-disable-next-line */
export interface TopMenuProps {}

export function TopMenu(props: TopMenuProps) {
  const dispatch = useDispatch();

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [openedMenuId, setOpenedMenuId] = useState<string>('');

  const handleTopMenuItemClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElement(event.currentTarget);
    setOpenedMenuId(event.currentTarget.id);
  };

  const handleSubMenuItemClose = (subMenuItemId: string) => {
    setAnchorElement(null);
    setOpenedMenuId('');
    console.log(`Sub menu item ${subMenuItemId} clicked`);

    switch (subMenuItemId) {
      case 'quit':
        window.close();
        break;

      case 'print':
        window.print();
        break;

      case 'license':
        window.open(
          'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
          '_blank',
        );
        break;

      case 'github':
        window.open(
          'https://github.com/wojciechmarek/the-canvas-paint#readme',
          '_blank',
        );
        break;

      default:
        changeToolTo(subMenuItemId);
        break;
    }
  };

  const changeToolTo = (toolType: string) => {
    switch (toolType) {
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

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'B':
          changeToolTo('brush');
          break;

        case 'P':
          changeToolTo('pen');
          break;

        case 'S':
          changeToolTo('spray');
          break;

        case 'E':
          changeToolTo('eraser');
          break;

        case 'U':
          changeToolTo('blur');
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <TopMenuContainer>
      {menuItems.map((menuItem) => (
        <Fragment key={`${menuItem.id}`}>
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
              {menuItem.subMenuItems.map((subMenuItem) =>
                subMenuItem.id === 'divider' ? (
                  <Divider key={`${subMenuItem.id}`} />
                ) : (
                  <MenuItem
                    key={subMenuItem.id}
                    onClick={() => handleSubMenuItemClose(subMenuItem.id)}
                    disabled={subMenuItem.isDisabled ?? false}
                  >
                    <ListItemText>{subMenuItem.text}</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      {subMenuItem.shortcut}
                    </Typography>
                  </MenuItem>
                ),
              )}
            </MenuList>
          </Menu>
        </Fragment>
      ))}
    </TopMenuContainer>
  );
}

export default TopMenu;
