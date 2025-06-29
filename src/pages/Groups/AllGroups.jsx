import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
  const groups = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const allCategories = ["All", ...new Set(groups.map(group => group.hobbyCategory))];

  const filteredGroups = groups.filter(group =>
    selectedCategory === "All" ? true : group.hobbyCategory === selectedCategory
  );

  const sortedGroups =
    sortOrder === "asc"
      ? [...filteredGroups].sort((a, b) =>
          a.groupName.toLowerCase().localeCompare(b.groupName.toLowerCase())
        )
      : sortOrder === "desc"
      ? [...filteredGroups].sort((a, b) =>
          b.groupName.toLowerCase().localeCompare(a.groupName.toLowerCase())
        )
      : filteredGroups;

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
        Explore All Hobby Groups
      </h2>
      <p className="text-center text-base-content mb-10 max-w-2xl mx-auto">
        Discover and connect with vibrant communities that share your passions, fuel your creativity, and help you grow through meaningful hobbies and shared interests.
      </p>

      {/* Filter + Sort Controls */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
        {/* Category Dropdown */}
        <select
          className="select select-bordered max-w-xs w-full"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {allCategories.map((category, i) => (
            <option key={i} value={category}>{category}</option>
          ))}
        </select>

        {/* Sort Options */}
        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="default"
              checked={sortOrder === "default"}
              onChange={() => setSortOrder("default")}
              className="radio radio-primary"
            />
            Default
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="asc"
              checked={sortOrder === "asc"}
              onChange={() => setSortOrder("asc")}
              className="radio radio-primary"
            />
            A-Z
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="desc"
              checked={sortOrder === "desc"}
              onChange={() => setSortOrder("desc")}
              className="radio radio-primary"
            />
            Z-A
          </label>
        </div>
      </div>

      {/* Group Cards */}
      <div className="grid @min-[520px]:grid-cols-2 @min-[1280px]:grid-cols-3 gap-6">
        {sortedGroups.map((group) => (
          <Slide triggerOnce key={group._id}>
            <div className="flex flex-col sm:flex-row bg-white black-bg-dark-mode rounded shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
              <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                <img
                  src={group.imageURL}
                  alt={group.groupName}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5 flex flex-col justify-between sm:w-2/3">
                <div>
                  <span className="inline-block bg-accent/20 text-accent px-2 py-1 rounded text-xs font-semibold mb-2">
                    {group.hobbyCategory}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-800 mb-1 gray-text-dark-mode">
                    {group.groupName}
                  </h3>
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
    </section>
  );
};

export default AllGroups;
