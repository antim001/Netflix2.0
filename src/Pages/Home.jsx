import React from 'react';
import Main from './../components/Main';
import Navbar from './../components/Navbar';
import Row from './../components/Row';
import requests from '../Request.js'
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Main></Main> 
           <Row rowId='1'
           title='Up Coming' fetchURL={requests.requestUpcoming}
           ></Row>
           <Row rowId='2'
           title='Popular' fetchURL={requests.requestPopular}
           ></Row>
           <Row rowId='3'
           title='Trending' fetchURL={requests.requestTrending}
           ></Row>
           <Row rowId='4'
           title='Top Rated' fetchURL={requests.requestTopRated}
           ></Row>
           <Row rowId='5'
           title='Horror' fetchURL={requests.requestHorror}
           ></Row>
        </div>
    );
};

export default Home;