import React, { useState } from "react";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md"; // ← React Icon import

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "Thanks for subscribing to our newsletter.",
    });

    setEmail(""); // Clear input
  };

  return (
    <section className="bg-base-200 rounded py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title with Icon */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary flex justify-center items-center gap-2">
          <MdEmail className="text-4xl text-secondary" />
          Join Our Newsletter
        </h2>

        <p className="text-base-content/80 mb-8 leading-relaxed">
          Subscribe to get the latest updates about hobby events, featured groups, and tips to grow your passion delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full rounded-[2px] sm:w-auto flex-grow"
            required
          />
          <button type="submit" className="btn btn-primary rounded-[2px] text-white">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
