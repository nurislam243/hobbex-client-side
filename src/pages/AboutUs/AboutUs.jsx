import React from 'react';
import { FaBullseye, FaLightbulb, FaPaintBrush, FaSearch, FaCalendarAlt, FaComments, FaChartLine, FaTools } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Nur Islam",
    role: "Founder & Lead Developer",
    image: "https://i.ibb.co/HZBX7KN/pexels-simon-robben-55958-614810.jpg"
  },
  {
    name: "Amina Sultana",
    role: "Community Manager",
    image: "https://i.ibb.co/mVr3WQ5c/profile-picture-young-indian-woman-renter-headshot-portrait-confident-tenant-pose-modern-own-new-apa.webp"
  },
  {
    name: "Rahim Uddin",
    role: "UI/UX Designer",
    image: "https://i.ibb.co/ccB2RPCM/pexels-latronico-709188.jpg"
  }
];

const AboutUs = () => {
  return (
    <section className="bg-base-100 text-base-content py-20 px-4 md:px-12 lg:px-24 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Title & Intro */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-4 text-base-content/80 tracking-tight">About <span className="text-primary">HobbEx</span></h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            HobbEx is your creative hub to explore, connect, and share your passion with like-minded hobbyists. From crafting to coding — your community starts here.
          </p>
        </div>

        {/* Mission, Why, Importance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-base-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4 text-primary text-4xl"><FaBullseye /></div>
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-base-content/80">
              To unite hobbyists through a platform that inspires creativity, collaboration, and lifelong learning.
            </p>
          </div>
          <div className="bg-base-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4 text-primary text-4xl"><FaLightbulb /></div>
            <h3 className="text-2xl font-semibold mb-2">Why HobbEx?</h3>
            <p className="text-base-content/80">
              We simplify how you find groups, book services, join events, and grow your skills through fun and flexibility.
            </p>
          </div>
          <div className="bg-base-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4 text-primary text-4xl"><FaPaintBrush /></div>
            <h3 className="text-2xl font-semibold mb-2">Importance</h3>
            <p className="text-base-content/80">
              Hobbies reduce stress, enhance creativity, and build confidence. We ensure you're never alone in your journey.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-primary mb-6">What We Do</h3>
          <p className="text-base-content/70 max-w-4xl mx-auto mb-6">
            Whether you're into robotics, painting, gardening, or game development — HobbEx empowers your hobbies through:
          </p>
          <ul className="text-left text-base-content/80 max-w-3xl mx-auto space-y-4">
            <li className="flex items-center gap-2"><FaSearch className="text-primary" /> Discovering local & global hobby groups</li>
            <li className="flex items-center gap-2"><FaCalendarAlt className="text-primary" /> Hosting & attending engaging events & workshops</li>
            <li className="flex items-center gap-2"><FaComments className="text-primary" /> Sharing guides, experiences & community insights</li>
            <li className="flex items-center gap-2"><FaChartLine className="text-primary" /> Tracking your growth through smart dashboards</li>
            <li className="flex items-center gap-2"><FaTools className="text-primary" /> Offering or booking hobby-based services</li>
          </ul>
        </div>

        {/* Meet the Team */}
        <div>
          <h3 className="text-4xl font-bold text-center text-primary mb-10">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <figure className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-primary"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h4 className="card-title">{member.name}</h4>
                  <p className="text-base-content/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
