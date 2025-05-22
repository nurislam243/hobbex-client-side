import React from 'react';
import { FaUsers, FaLock, FaBolt, FaGlobe, FaLightbulb } from 'react-icons/fa';

const BenefitsSection = () => {
  const features = [
  {
    icon: <FaUsers className="text-3xl text-primary" />,
    title: 'Hobby-Focused Communities',
    description:
      'Connect with people who are passionate about the same hobbies as you—whether it’s photography, gaming, gardening, or tech innovations. Hobbex ensures everyone finds their perfect circle.',
  },
  {
    icon: <FaLock className="text-3xl text-primary" />,
    title: 'Secure & Moderated Environment',
    description:
      'Our platform is carefully monitored to maintain a safe, friendly, and respectful space. Each group follows community guidelines to provide a trustworthy user experience.',
  },
  {
    icon: <FaBolt className="text-3xl text-primary" />,
    title: 'Quick & Seamless Setup',
    description:
      'Get started in minutes! Whether you’re joining a group or creating your own, our intuitive interface ensures a hassle-free experience every time.',
  },
  {
    icon: <FaGlobe className="text-3xl text-primary" />,
    title: 'Discover Local Talent & Events',
    description:
      'Explore groups and meetups happening in your local area. Share your passion in real-life gatherings, workshops, and community-driven events.',
  },
  {
    icon: <FaLightbulb className="text-3xl text-primary" />,
    title: 'Personal & Skill Development',
    description:
      'Collaborate, learn, and grow alongside skilled hobbyists. From beginner to expert, every member gets the chance to enhance their knowledge and creativity.',
  },
  {
    icon: <FaUsers className="text-3xl text-primary" />,
    title: 'Supportive Networking Space',
    description:
      'Build lasting connections and friendships. Hobbex is not just about hobbies; it’s about community, encouragement, and shared experiences that matter.',
  },
];


  return (
    <section className="py-16 bg-base-100">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Why Choose Hobbex?
        </h2>
        <p className="text-center text-base-content mb-10 max-w-2xl mx-auto">
          Hobbex is the perfect platform to connect with like-minded people and grow your passions through local hobby groups.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-base-200 p-6 rounded shadow hover:shadow-lg transition min-h-[240px]"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
              <p className="text-base-content">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
