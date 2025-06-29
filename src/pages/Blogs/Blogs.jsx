import React, { useState } from "react";
import { useLoaderData } from "react-router";

const Blogs = () => {
  const blogs = useLoaderData();
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="bg-base-100 py-20">
      <div className="">
        <h2 className="text-5xl font-extrabold text-center text-primary mb-16">
          Our Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="card bg-base-200 rounded shadow-lg overflow-hidden flex flex-col transition-shadow duration-400 hover:shadow-2xl"
            >
              <figure className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                    {blog.title}
                  </h3>
                </div>
              </figure>

              <div className="card-body flex flex-col flex-grow p-6">
                <p className="text-base-content/80 flex-grow leading-relaxed mb-6">
                  {blog.excerpt}
                </p>

                <div className="flex justify-between items-center text-sm text-base-content/60 font-medium tracking-wide">
                  <span>
                    By <strong>{blog.author}</strong>
                  </span>
                  <time dateTime={blog.date}>{blog.date}</time>
                </div>

                <button
                  className="btn btn-primary rounded-[2px] mt-6 self-start flex items-center gap-2 text-white"
                  onClick={() => setSelectedBlog(blog)}
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBlog && (
        <>
          <input
            type="checkbox"
            id="blog-modal"
            className="modal-toggle"
            checked={true}
            readOnly
          />
          <div className="modal modal-open">
            <div className="modal-box max-w-3xl relative">
              <h3 className="text-3xl font-bold mb-4">{selectedBlog.title}</h3>
              <p className="text-sm text-base-content/60 mb-6">
                By <strong>{selectedBlog.author}</strong> | {selectedBlog.date}
              </p>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-56 object-cover rounded mb-6"
              />
              <p className="mb-6">{selectedBlog.content || "No detailed content available."}</p>

              <button
                className="btn btn-outline absolute top-4 right-4"
                onClick={() => setSelectedBlog(null)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Blogs;
