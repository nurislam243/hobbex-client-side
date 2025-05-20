import React from 'react';
import Banner from '../../components/Banner/Banner';
import ThemeControler from '../../ui/ThemeControler/ThemeControler';
import Spinner from '../../ui/Spinner/Spinner';

const Home = () => {
    return (
        <div>
            <ThemeControler></ThemeControler>
            <Spinner></Spinner>
            {/* <Banner></Banner> */}


        </div>
    );
};

export default Home;