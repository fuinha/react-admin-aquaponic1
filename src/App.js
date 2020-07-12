import React from 'react';
import { Admin, Resource, fetchUtils, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import hasuraDataProvider from 'ra-data-hasura';
import { DeviceList, DeviceEdit, DeviceCreate } from './components/devices'
import { ControlList, ControlEdit, ControlCreate } from './components/controls'
import { SensorList, SensorEdit, SensorCreate } from './components/sensors'
import { aquacontrolList } from './components/aquaponic_controls_data'
import { SystemList, SystemEditList, SystemCreate } from './components/systems'
import { Customer_controlList } from './components/controlpanel'
import authProvider from './authProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import Dashboard from './components/dashboard'
import CustomRoutes from './components/CustomRoutes'
import MyLayout from './layout';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import RouterIcon from '@material-ui/icons/Router';
import PersonIcon from '@material-ui/icons/Person';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import AssessmentIcon from '@material-ui/icons/Assessment';
import WavesIcon from '@material-ui/icons/Waves';

// Nimport { ApolloProvider } from "react-apollo";
// import { ApolloClient } from './components/graphql/client'
// import ExplorePage from './components/pages/ExplorePage'


const token = localStorage.getItem('access_token');

console.log("access token from main app", token)

const headers = { 'content-type': 'application/json', 'authorization': `Bearer ${token}` };


const dataProvider = hasuraDataProvider('http://95.216.227.58:31846', headers);

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
   sidebar: {
     width: 240, // The default value is 240
     closedWidth: 70, // The default value is 55
   }
});

// console.log(headers);

const App = () => (
  <div>
    < Admin theme = {theme}
      customRoutes={CustomRoutes}
      dashboard={Dashboard}
      layout = {MyLayout}
      authProvider={authProvider}
      dataProvider={dataProvider} >
      <Resource name="device" options={{ label: 'Devices' }} list={DeviceList} edit={DeviceEdit} create={DeviceCreate} icon={RouterIcon}/>
   
      <Resource name="customer" options={{ label: 'Customer Info' }} list={ListGuesser} edit={EditGuesser} show={ShowGuesser} icon={PersonIcon}/>

      <Resource name="controls" options={{ label: 'Controls' }} list={ControlList} edit={ControlEdit} create={ControlCreate} icon={KeyboardReturnIcon}/>

      <Resource name="sensors" options={{ label: 'Sensors' }} list={SensorList} edit={SensorEdit} create={SensorCreate} icon={AssessmentIcon}/>

      <Resource name="Systems" list={SystemList} edit={SystemEditList} create={SystemCreate} show={ShowGuesser} icon={DeviceHubIcon} />
   
      <Resource name="aquaponic_controls_data" options={{ label: 'Aquaponics' }} list={aquacontrolList} edit={EditGuesser} show={ShowGuesser} icon={WavesIcon}/>

      

    </Admin>
    
  </div>
);

export default App;