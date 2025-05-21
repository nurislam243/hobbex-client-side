import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
  const groups = useLoaderData();

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Explore All Hobby Groups
      </h2>

      <div className="flex flex-col @min-[520px]:grid @min-[520px]:grid-cols-2 @min-[1280px]:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group._id}
            className="flex flex-col sm:flex-row bg-white rounded shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
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
                <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded text-xs font-semibold mb-2">
                  {group.hobbyCategory}
                </span>
                <h3 className="text-xl font-bold text-neutral-800 mb-1">{group.groupName}</h3>
                <p className="text-gray-600 text-sm">
                  {group.description.length > 120
                    ? group.description.slice(0, 120) + '...'
                    : group.description}
                </p>
              </div>
              <div className="mt-4">
                <Link to={`/group/${group._id}`}>
                  <button className="btn btn-primary btn-sm">See More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllGroups;
