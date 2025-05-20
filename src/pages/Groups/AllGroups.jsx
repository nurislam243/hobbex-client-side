import React from 'react';
import { Link } from 'react-router';

const groups = [
  {
    id: 1,
    title: 'Digital Photography Club',
    description: 'Join local photographers to explore creative techniques and take part in photo walks.',
    image: 'https://source.unsplash.com/400x300/?photography,group',
  },
  {
    id: 2,
    title: 'Weekend Cyclists',
    description: 'Explore the city every weekend with passionate cyclists who love adventure.',
    image: 'https://source.unsplash.com/400x300/?cycling,group',
  },
  {
    id: 3,
    title: 'JavaScript Ninjas',
    description: 'Learn, share, and build JavaScript projects with fellow coding enthusiasts.',
    image: 'https://source.unsplash.com/400x300/?coding,group',
  },
  {
    id: 4,
    title: 'Sketch & Draw Circle',
    description: 'Improve your sketching skills and exchange feedback in a friendly artist circle.',
    image: 'https://source.unsplash.com/400x300/?sketch,drawing',
  },
  {
    id: 5,
    title: 'Yoga for Beginners',
    description: 'Daily yoga sessions to enhance your physical and mental well-being.',
    image: 'https://source.unsplash.com/400x300/?yoga,group',
  },
  {
    id: 6,
    title: 'Community Gardeners',
    description: 'Grow vegetables and flowers together while learning organic gardening techniques.',
    image: 'https://source.unsplash.com/400x300/?gardening,community',
  },
  {
    id: 7,
    title: 'Bookworms United',
    description: 'Join weekly book discussions with other literature lovers from your locality.',
    image: 'https://source.unsplash.com/400x300/?books,reading',
  },
  {
    id: 8,
    title: 'Creative Writers Group',
    description: 'Write stories, poems, or blogs and get helpful critiques from fellow writers.',
    image: 'https://source.unsplash.com/400x300/?writing,group',
  },
  {
    id: 9,
    title: 'Weekend Hikers',
    description: 'Discover local trails and enjoy nature with a fun and supportive group.',
    image: 'https://source.unsplash.com/400x300/?hiking,nature',
  },
  {
    id: 10,
    title: 'Board Game Nights',
    description: 'Unplug and unwind every Friday night with exciting board games and good company.',
    image: 'https://source.unsplash.com/400x300/?boardgames,fun',
  },
  {
    id: 11,
    title: 'Public Speakers Club',
    description: 'Sharpen your public speaking and leadership skills with experienced mentors.',
    image: 'https://source.unsplash.com/400x300/?publicspeaking,group',
  },
  {
    id: 12,
    title: 'Home Bakers Circle',
    description: 'Exchange recipes, tips, and goodies with other passionate bakers.',
    image: 'https://source.unsplash.com/400x300/?baking,cake',
  },
  {
    id: 13,
    title: 'Musicians Meet',
    description: 'Jam with fellow musicians and explore new instruments and genres.',
    image: 'https://source.unsplash.com/400x300/?music,band',
  },
  {
    id: 14,
    title: 'Film Buffs Discussion Club',
    description: 'Dive deep into film reviews, theories, and trivia with cinema lovers.',
    image: 'https://source.unsplash.com/400x300/?film,movie',
  },
  {
    id: 15,
    title: 'Chess Masters Group',
    description: 'Improve your chess strategy through friendly games and discussions.',
    image: 'https://source.unsplash.com/400x300/?chess,game',
  },
  {
    id: 16,
    title: 'Tech Talks & Startups',
    description: 'Network with tech lovers, discuss new trends, and pitch startup ideas.',
    image: 'https://source.unsplash.com/400x300/?startup,technology',
  },
  {
    id: 17,
    title: 'Pet Lovers Social Club',
    description: 'Meet fellow pet owners, share experiences, and arrange playdates!',
    image: 'https://source.unsplash.com/400x300/?pets,dog,cat',
  },
];


const AllGroups = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Explore All Hobby Groups</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-base-100 border rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={group.image}
              alt={group.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">{group.title}</h3>
              <p className="text-gray-600 text-sm">{group.description}</p>
              <Link
                to={`/groups/${group.id}`}
                className="inline-block mt-2 text-sm font-medium text-accent hover:underline"
              >
                See More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllGroups;
