import React from 'react';
import { Route } from 'react-router-dom';
// import explore from './pages/ExplorePage';
import {Hello} from './pages/hello'


export default [
    <Route exact path="/hello" component={Hello} />,
    
];