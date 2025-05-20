import React, { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import ThemeControler from '../../ui/ThemeControler/ThemeControler';
import Spinner from '../../ui/Spinner/Spinner';
import { AuthContext } from '../../context/AuthContext';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <ThemeControler></ThemeControler>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>


        </div>
    );
};

export default Home;