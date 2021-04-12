import React, { useState } from 'react';
import { Divider, IconButton, List, ListItem, ListItemText, SwipeableDrawer, useMediaQuery } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: '100vw'
    },
    centerText: {
        textAlign: 'center'
    }
});

const SideMenu = ({ history }) => {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const toggleMenu = state => {
        setMenuOpen(currentState => {
            return state ? state : !currentState;
        });
    };

    const MenuList = () => {
        return listItems.map(({ text, path }) => (
            <ListItem button key={text} onClick={() => history.push(path)}>
                <ListItemText className={clsx({ [classes.centerText]: isSmallScreen })} inset={!isSmallScreen} primary={text} />
            </ListItem>
        ));
    };

    return (
        <React.Fragment>
            <IconButton onClick={() => toggleMenu(true)}>
                <Menu style={{ color: '#fff' }} />
            </IconButton>

            <SwipeableDrawer anchor='left' open={menuOpen} onClose={() => toggleMenu(false)} onOpen={() => toggleMenu(true)}>
                <div
                    className={clsx(classes.list, {
                        [classes.fullList]: isSmallScreen
                    })}
                    onClick={() => toggleMenu(false)}
                >
                    <List>
                        <MenuList />
                        <Divider />
                    </List>
                </div>
            </SwipeableDrawer>
        </React.Fragment>
    );
};

const listItems = [
    {
        text: 'Inbox',
        path: '/inbox'
    }
];

export default SideMenu;
