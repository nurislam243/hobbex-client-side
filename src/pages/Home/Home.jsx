import React, { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import ThemeControler from '../../ui/ThemeControler/ThemeControler';
import Spinner from '../../ui/Spinner/Spinner';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <ThemeControler></ThemeControler>
            <Spinner></Spinner>


            {/* <Banner></Banner> */}


        </div>
    );
};

export default Home;