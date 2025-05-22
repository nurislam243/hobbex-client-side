import React from 'react';
import { useLoaderData } from 'react-router';

const GroupDetails = () => {
  const group = useLoaderData();
  const {
    groupName,
    imageURL,
    hobbyCategory,
    description,
    maxMembers,
    startDate
  } = group;

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">

        {/* Group Image on Top */}
        <div className="h-64 md:h-96 w-full">
          <img
            src={imageURL}
            alt={groupName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Below */}
        <div className="p-6 md:p-8 space-y-5">
          {/* Category Badge */}
          <div className="inline-block bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
            {hobbyCategory}
          </div>

          {/* Group Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {groupName}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            {description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 pt-2">
            <div>
              <span className="font-medium">Max Members:</span> {maxMembers}
            </div>
            <div>
              <span className="font-medium">Start Date:</span> {startDate}
            </div>
          </div>

          {/* Action Button */}
          <button className="mt-6 px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition duration-200 shadow-md">
            Join This Group
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupDetails;
