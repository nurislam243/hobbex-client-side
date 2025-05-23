import React from 'react';
import FeaturedGroupCard from '../FeaturedGroupCard/FeaturedGroupCard';
import { filterFeaturedGroups } from '../../utils/utils';

const FeaturedSection = ({groups}) => {
    const featuredGroup = filterFeaturedGroups(groups);

    return (
        <section className="">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
                Featured Groups
            </h2>
            <p className="text-center text-base-content mb-10 max-w-2xl mx-auto">
                Discover the most active and engaging hobby communities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    featuredGroup.map(group => <FeaturedGroupCard key={group._id} group={group} ></FeaturedGroupCard>)
                }
            </div>
        </section>

    );
};

export default FeaturedSection;