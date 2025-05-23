import React from 'react';
import { useLoaderData } from 'react-router';
import { filterIsDateEnd } from '../../utils/utils';
import { format } from 'date-fns';


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

  const isDateEnd = filterIsDateEnd(startDate);
  console.log(isDateEnd);

  return (
   <div className="">
     <section className="mx-auto px-4 md:px-6 pt-3 sm:pt-7">
      <div className="bg-white black-bg-dark-mode shadow-xl rounded overflow-hidden">

        {/* Group Image on Top */}
        <div className="h-64 md:h-96 2xl:h-[400px] w-full">
          <img
            src={imageURL}
            alt={groupName}
            className="w-full h-full"
          />
        </div>

        {/* Content Below */}
        <div className="p-6 md:p-8 space-y-5">
          {/* Category Badge */}
          <div className="inline-block bg-accent/20 text-accent px-2 py-1 rounded text-xs font-semibold  sm:px-4 shadow-sm">
            {hobbyCategory}
          </div>

          {/* Group Name */}
          <h1 className="text-3xl md:text-4xl font-bold gray-text-dark-mode text-gray-800">
            {groupName}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base white-text-dark-mode leading-relaxed">
            {description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-[16px] text-gray-700 pt-2">
            <div className='white-text-dark-mode'>
              <span className="font-bold gray1-text-dark-mode">Max Members:</span> {maxMembers}
            </div>
            <div className='white-text-dark-mode'>
              <span className="font-bold gray1-text-dark-mode">Start Date:</span> {format(new Date(startDate), 'd MMM yyyy')}
            </div>
          </div>

          {/* Action Button */}
          <div className="">
            {
              isDateEnd ? <button className="mt-6 px-6 py-2 bg-primary hover:bg-primary/90 cursor-pointer text-white       font-medium transition duration-200 rounded-[2px] shadow-md">
                Join This Group
              </button>: <span className='px-3 py-2 md:text-[16px] rounded-full bg-error/80  text-white text-sm'>This group is no longer active</span>
            }
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default GroupDetails;
