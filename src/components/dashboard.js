import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

import {Hello} from './pages/hello'
import './framestyle.css'


var cardStyle = {
    display: 'block',
    width: '100%',
    transitionDuration: '0.3s',
    height: '45vw'
}
const token = localStorage.getItem('access_token');

export default () => (
    
    // styles="scrolling=no; border: 0; width: 100%; height: 3000px; overflow:hidden; ">

// scrolling="no" overflow="hidden"
  
  <div>

        <iframe src={`http://localhost:3001/?token=${token}`} scrolling="no" overflow="hidden" width="100%" height="1000" frameborder="0"
            allowfullscreen sandbox>
        </iframe>
   
      </div>


        /* <Card style={cardStyle}>
            <Title title="Welcome to administration"/>


            <CardContent>

                <iframe src="http://localhost:3001/${}" scrolling="no" overflow="hidden" width="100%" hight="100%">

                </iframe>

            </CardContent>
        </Card> */



    
    
);