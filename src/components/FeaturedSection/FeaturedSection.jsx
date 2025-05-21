import React from 'react';
import FeaturedGroupCard from '../FeaturedGroupCard/FeaturedGroupCard';

const FeaturedSection = ({groups}) => {
    return (
        <section className="my-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Groups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                groups.map(group => <FeaturedGroupCard key={group._id} group={group} ></FeaturedGroupCard>)
            }
        </div>
        </section>

    );
};

export default FeaturedSection;