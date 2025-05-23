import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
  const groups = useLoaderData();
  const [sortGroups, setSortGroups] = useState(groups);
  const [sortState, setSortState] = useState(true);

  useEffect(() => {
    if (sortState) {
      const sorted = groups.slice(0, 9);
      setSortGroups(sorted);
    } else {
      setSortGroups(groups);
    }
  }, [sortState, groups]);

  return (
    <section className="py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
        Explore All Hobby Groups
      </h2>
      <p className="text-center text-base-content mb-10 max-w-2xl mx-auto">
        Discover and connect with vibrant communities that share your passions, fuel your creativity, and help you grow through meaningful hobbies and shared interests.
      </p>

      <div className="flex flex-col @min-[520px]:grid @min-[520px]:grid-cols-2 @min-[1280px]:grid-cols-3 gap-6">
        {sortGroups.map((group) => (
          <Slide triggerOnce>
            <div
              key={group._id}
              className="flex flex-col sm:flex-row bg-white black-bg-dark-mode rounded shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image Left */}
              <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                <img
                  src={group.imageURL}
                  alt={group.groupName}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content Right */}
              <div className="p-5 flex flex-col justify-between sm:w-2/3">
                <div>
                  <span className="inline-block bg-accent/20 text-accent px-2 py-1 rounded text-xs font-semibold mb-2">
                    {group.hobbyCategory}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-800 mb-1 gray-text-dark-mode">{group.groupName}</h3>
                  <p className="text-gray-600 white-text-dark-mode text-sm">
                    {group.description.length > 120
                      ? group.description.slice(0, 120) + '...'
                      : group.description}
                  </p>
                </div>
                <div className="mt-4">
                  <Link to={`/group/${group._id}`}>
                    <button className="btn btn-primary rounded-[2px] text-white btn-sm">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className='btn btn-secondary rounded-[2px] md:text-lg' onClick={() => setSortState(!sortState)}>
          {
            sortState ? <span>View All</span> : <span>View Less</span>
          }
        </button>
      </div>
    </section>
  );
};

export default AllGroups;
