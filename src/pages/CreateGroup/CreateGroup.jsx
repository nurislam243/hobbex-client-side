import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";

const CreateGroup = () => {
  const {user} = useContext(AuthContext);
  // console.log(user);

  const handleCreateGroup = (e) =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());


    // create group form validation

    if (!newGroup.groupName || newGroup.groupName.length < 3) {
      toast.error("Group name must be at least 3 characters.");
      return;
    }

    if (!newGroup.hobbyCategory || newGroup.hobbyCategory === "Pick a category") {
      toast.error("Please select a hobby category.");
      return;
    }

    if (!newGroup.metingLocation) {
      toast.error("Meeting location is required.");
      return;
    }

    const maxMembers = parseInt(newGroup.maxMembers);
    if (!newGroup.maxMembers || isNaN(maxMembers) || maxMembers < 2) {
      toast.error("There must be at least 2 members in a group.");
      return;
    }

    if (!newGroup.startDate) {
      toast.error("Start date is required.");
      return;
    }


    if (!newGroup.imageURL || !newGroup.imageURL.startsWith("http")) {
      toast.error("Please enter a valid image URL.");
      return;
    }

    if (!newGroup.description || newGroup.description.length < 10) {
      toast.error("Description must be at least 10 characters.");
      return;
    }


    // send create group data to the db
    fetch('https://hobbex-server.vercel.app/groups', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newGroup)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
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
    <Slide triggerOnce>
      <div className="px-6 pb-6 pt-8 shadow-2xl rounded bg-white black-bg-dark-mode mt-4 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">Create a New Hobby Group</h2>

        <form onSubmit={handleCreateGroup} className="space-y-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Group Name */}
              <div className="w-full">
                  <label className="label">
                      <span className="label-text">Group Name</span>
                  </label>
                  <input type="text" name="groupName" placeholder="Enter group name" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
              </div>

              {/* Hobby Category */}
              <div className="w-full">
                  <label className="label">
                      <span className="label-text">Hobby Category</span>
                  </label>
                  <select name="hobbyCategory" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[10px] rounded-[2px] w-full text-[17px] input-bg-dark-mode">
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
                    <option>Travelling</option>
                  </select>
              </div>

              {/* Meeting Location */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Meeting Location</span>
              </label>
              <input type="text" name="metingLocation" placeholder="Location" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
              </div>

              {/* Max Members */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Max Members</span>
              </label>
              <input type="number" name="maxMembers" placeholder="e.g. 10" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
              </div>

              {/* Start Date */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Start Date</span>
              </label>
              <input type="date" name="startDate" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
              </div>

              {/* Image URL */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Image URL</span>
              </label>
              <input type="url" name="imageURL" placeholder="https://example.com/image.jpg" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
              </div>

              {/* User Name (readonly) */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Your Name</span>
              </label>
              <input type="text" name="userName" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode " defaultValue={user.displayName} readOnly />
              </div>

              {/* User Email (readonly) */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Your Email</span>
              </label>
              <input type="email" name="userEmail" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" defaultValue={user.email} readOnly />
              </div>
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2 w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea name="description" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" rows="3" placeholder="Write a short description..."></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4 w-full">
            <button type="submit" className="btn btn-primary sm:text-lg py-5 text-white w-full rounded-[2px]">Create Group</button>
          </div>
        </form>
      </div>
    </Slide>
  );
};

export default CreateGroup;
