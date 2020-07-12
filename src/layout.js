// in src/MyLayout.js
import React from "react";
import {Layout} from 'react-admin';
import MySidebar from './components/MySidebar';
import MyMenu from './components/test-menu3';
// import MyAppBar from './MyAppBar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';


const MyLayout = (props) => < Layout {...props} menu = {MyMenu}/>;

export default MyLayout;



