import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuItemLink, getResources } from 'react-admin';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import MenuList from '@material-ui/core/MenuList';
import DefaultIcon from '@material-ui/icons/ViewList';

import Grow from '@material-ui/core/Grow';


import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';






const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


const Menu1 = ({ onMenuClick, logout }) => {


    const classes = useStyles();
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    // const open = useSelector(state => state.admin.ui.sidebarOpen);
    const [open,setOpen] = React.useState(false);
    const resources = useSelector(getResources);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Control Panel
      </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
               
            >
                {
                    resources.map(resource => (

                        <MenuItemLink key={resource.name}
                            to={`/${resource.name}`}
                            primaryText={(resource.options && resource.options.label) || resource.name}
                            leftIcon={resource.icon ? <resource.icon /> : <DefaultIcon />}
                            onClick={onMenuClick}
                            sidebarIsOpen={open} />

                    )

                    )

                }

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
               
               
               

                
            </Menu>








        </div>
    );
}

export default (Menu1);