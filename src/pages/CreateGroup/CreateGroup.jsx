import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const CreateGroup = () => {
  const {user} = useContext(AuthContext);
  console.log(user);

  const handleCreateGroup = (e) =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());
    console.log(newGroup);


    // send create group data to the db
    fetch('http://localhost:3000/groups', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newGroup)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Group Created!',
          text: 'Your hobby group has been successfully created.',
          icon: 'success',
          confirmButtonText: 'Okay'
        });

        form.reset()

      }
    })
    
  }

  return (
    <div className="px-6 pb-6 pt-8 shadow-2xl rounded bg-white mt-4 mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Create a New Hobby Group</h2>

      <form onSubmit={handleCreateGroup} className="space-y-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Group Name */}
            <div className="w-full">
                <label className="label">
                    <span className="label-text">Group Name</span>
                </label>
                <input type="text" name="groupName" placeholder="Enter group name" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full" />
            </div>

            {/* Hobby Category */}
            <div className="w-full">
                <label className="label">
                    <span className="label-text">Hobby Category</span>
                </label>
                <select name="hobbyCategory" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[10px] rounded-[2px] w-full text-[17px]">
                  <option disabled selected>Pick a category</option>
                  <option>Drawing & Painting</option>
                  <option>Photography</option>
                  <option>Video Gaming</option>
                  <option>Fishing</option>
                  <option>Running</option>
                  <option>Cooking</option>
                  <option>Reading</option>
                  <option>Writing</option>
                  <option>Programming</option>
                  <option>Gardening</option>
                  <option>Music & Instruments</option>
                </select>
            </div>

            {/* Meeting Location */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Meeting Location</span>
            </label>
            <input type="text" name="metingLocation" placeholder="Location" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full" />
            </div>

            {/* Max Members */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Max Members</span>
            </label>
            <input type="number" name="maxMembers" placeholder="e.g. 10" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full" />
            </div>

            {/* Start Date */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Start Date</span>
            </label>
            <input type="date" name="startDate" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full" />
            </div>

            {/* Image URL */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Image URL</span>
            </label>
            <input type="url" name="imageURL" placeholder="https://example.com/image.jpg" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full" />
            </div>

            {/* User Name (readonly) */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="userName" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full" defaultValue={user.displayName} readOnly />
            </div>

            {/* User Email (readonly) */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Your Email</span>
            </label>
            <input type="email" name="userEmail" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full" defaultValue={user.email} readOnly />
            </div>
        </div>

        {/* Description */}
        <div className="form-control md:col-span-2 w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name="description" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full" rows="3" placeholder="Write a short description..."></textarea>
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
