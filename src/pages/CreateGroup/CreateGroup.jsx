import React from "react";

const CreateGroup = () => {
  return (
    <div className=" p-6 bg-base-100 shadow-xl rounded-xl my-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Create a New Hobby Group</h2>

      <form className="space-y-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Group Name */}
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Group Name</span>
                </label>
                <input type="text" placeholder="Enter group name" className="input input-bordered w-full" />
            </div>

            {/* Hobby Category */}
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Hobby Category</span>
                </label>
                <select className="select select-bordered w-full">
                    <option disabled selected>Pick a category</option>
                    <option>Drawing & Painting</option>
                    <option>Photography</option>
                    <option>Video Gaming</option>
                    <option>Fishing</option>
                    <option>Running</option>
                    <option>Cooking</option>
                    <option>Reading</option>
                    <option>Writing</option>
                </select>
            </div>

            {/* Meeting Location */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Meeting Location</span>
            </label>
            <input type="text" placeholder="Location" className="input input-bordered w-full" />
            </div>

            {/* Max Members */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Max Members</span>
            </label>
            <input type="number" placeholder="e.g. 10" className="input input-bordered w-full" />
            </div>

            {/* Start Date */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Start Date</span>
            </label>
            <input type="date" className="input input-bordered w-full" />
            </div>

            {/* Image URL */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Image URL</span>
            </label>
            <input type="url" placeholder="https://example.com/image.jpg" className="input input-bordered w-full" />
            </div>

            {/* User Name (readonly) */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Your Name</span>
            </label>
            <input type="text" className="input input-bordered w-full" value="Your Name" readOnly />
            </div>

            {/* User Email (readonly) */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Your Email</span>
            </label>
            <input type="email" className="input input-bordered w-full" value="you@example.com" readOnly />
            </div>
        </div>

                {/* Description */}
        <div className="form-control md:col-span-2 w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea className="textarea textarea-bordered w-full" rows="3" placeholder="Write a short description..."></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-4 w-full">
          <button type="submit" className="btn btn-primary w-full">Create Group</button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
