import React from 'react';
import { Link } from 'react-router';

const FeaturedGroupCard = ({ group }) => {
  const { _id, imageURL, groupName, description } = group;

  return (
    <div className="card group bg-white black-bg-dark-mode shadow-lg hover:shadow-2xl rounded overflow-hidden transition duration-300">
      <figure className="h-52 overflow-hidden">
        <img
          src={imageURL}
          alt={groupName}
          className="h-full w-full object-cover transform group-hover:scale-105 transition duration-300"
        />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-semibold gray-text-dark-mode text-neutral-800">{groupName}</h3>
        <p className="text-gray-600 white-text-dark-mode text-sm">
          {description.length > 100 ? description.slice(0, 100) + '...' : description}
        </p>
        <div className="card-actions justify-end mt-4">
          <Link to={`/group/${_id}`}>
            <button className="btn btn-primary text-white btn-sm">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGroupCard;
