import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';
import LabelIcon from '@material-ui/icons/Label';
import { withRouter } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';


import { makeStyles } from '@material-ui/core/styles';




// const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
// };

// const handleClose = () => {
//     setAnchorEl(null);
// };

const Menu1 = ({onMenuClick,logout}) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    // const [open,setOpen] = React.useState(false);
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
         

            <Button 
                // ref={anchorRef}
                aria-controls= "Control_Panel"               
                aria-haspopup="true"
                onClick={handleClick}
                  >      
                Control Panel 
            </Button>

            

            {/* <Paper className={classes.paper}> */}
            <MenuList
                id="Control_Panel"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                                                             
             
                {/* {
                    resources.map(resource => (
                        
                        <MenuItemLink key={resource.name}
                            to={`/${resource.name}`}
                            primaryText={(resource.options && resource.options.label) || resource.name}
                            leftIcon={resource.icon ? <resource.icon/> : <DefaultIcon/>}
                            onClick={onMenuClick}
                            sidebarIsOpen={open}/>
                        
                            )
                        
                            )
             
                    } */}
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>            
                      
            </MenuList>

                {/* </Paper> */}

        {/* {
            resources.map(resource => (<MenuItemLink key = {resource.name}
                to = {`/${resource.name}`}
                primaryText = {(resource.options && resource.options.label) ||resource.name}
                leftIcon = {resource.icon ? < resource.icon/> : <DefaultIcon/>}
                onClick = {onMenuClick}
                sidebarIsOpen = {open}/>))
        }  */}
        
        
        {/* <MenuItemLink to = "/custom-route"
        primaryText = "Miscellaneous"
        leftIcon = {<LabelIcon/>}
        onClick = {onMenuClick}
        sidebarIsOpen = {open}/>  */}

        {
            isXSmall && logout
        } 
        </div>
    );
};

export default withRouter(Menu1);