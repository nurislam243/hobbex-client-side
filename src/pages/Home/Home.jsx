import React from 'react';
import Banner from '../../components/Banner/Banner';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import { useLoaderData } from 'react-router';

const Home = () => {
    const groups = useLoaderData();
    console.log(groups);
    return (
        <div className='space-y-[100px]'>
            <Banner></Banner>
            <FeaturedSection groups={groups}></FeaturedSection>
            <BenefitsSection></BenefitsSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;