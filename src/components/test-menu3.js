import React from 'react';

import { MenuItemLink, getResources } from 'react-admin';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';

import DefaultIcon from '@material-ui/icons/ViewList';

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import SettingsIcon from '@material-ui/icons/Settings';








const Menu1 = ({ onMenuClick, logout }) => {
   
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    // const open = useSelector(state => state.admin.ui.sidebarOpen);
    // const [open,setOpen] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const resources = useSelector(getResources);

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

    const classes = useStyles();
        
        

        const handleClick = () => {
            setOpen(!open);
        };

        return (
        <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        
        </ListSubheader>
                }
                className={classes.root}
            >
                

                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Monitoring" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <List component="div" >


                </List>
                

                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <SettingsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Control Panel" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" >
                        
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

                    </List>
                </Collapse>
            </List>
        );
    
}
export default (Menu1);