import React from 'react';
import Banner from '../../components/Banner/Banner';
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import { useLoaderData } from 'react-router';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import { sortEventsByStartDate } from '../../utils/utils';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
    const groups = useLoaderData();

    const sortedEvents = sortEventsByStartDate(groups);

    return (
        <div className='space-y-[100px]'>
            <Banner></Banner>
            <FeaturedSection groups={groups}></FeaturedSection>
            <BenefitsSection></BenefitsSection>
            <UpcomingEvents sortedEvents={sortedEvents}></UpcomingEvents>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;