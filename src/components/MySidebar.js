import {createMuiTheme} from '@material-ui/core/styles';



const MySidebarTheme = createMuiTheme({
    sidebar: {
        width: 700, // The default value is 240
        closedWidth: 70, // The default value is 55
    },
});


export default MySidebarTheme;