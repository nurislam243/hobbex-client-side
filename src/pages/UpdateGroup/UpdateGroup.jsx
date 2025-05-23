import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";
import { Slide } from "react-awesome-reveal";

const CreateGroup = () => {
  const {user} = useContext(AuthContext);
  const groupData = useLoaderData();
  const { _id, startDate, metingLocation, maxMembers, imageURL, hobbyCategory, groupName, description } = groupData;

  const handleUpdateGroup = (e) =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());


    // send updated group data to the db
    fetch(`http://localhost:3000/groups/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedGroup)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Group Updated!',
          text: 'Your group updated successfully.',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
      }
    })
    
  }

  return (
    <Slide triggerOnce>
      <div className="px-6 pb-6 pt-8 shadow-2xl rounded bg-white black-bg-dark-mode mt-4 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">Update Group</h2>

        <form onSubmit={handleUpdateGroup} className="space-y-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* Group Name */}
              <div className="w-full">
                  <label className="label">
                      <span className="label-text">Group Name</span>
                  </label>
                  <input type="text" name="groupName" placeholder="Enter group name" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" defaultValue={groupName} />
              </div>

              {/* Hobby Category */}
              <div className="w-full">
                  <label className="label">
                      <span className="label-text">Hobby Category</span>
                  </label>
                  <select name="hobbyCategory" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[10px] rounded-[2px] w-full text-[17px] input-bg-dark-mode" defaultValue={hobbyCategory}>
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
              <input type="text" name="metingLocation" placeholder="Location" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" defaultValue={metingLocation}/>
              </div>

              {/* Max Members */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Max Members</span>
              </label>
              <input type="number" name="maxMembers" placeholder="e.g. 10" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" defaultValue={maxMembers}/>
              </div>

              {/* Start Date */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Start Date</span>
              </label>
              <input type="date" name="startDate" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" defaultValue={startDate} />
              </div>

              {/* Image URL */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Image URL</span>
              </label>
              <input type="url" name="imageURL" placeholder="https://example.com/image.jpg" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" defaultValue={imageURL}/>
              </div>

              {/* User Name (readonly) */}
              <div className="form-control w-full">
              <label className="label">
                  <span className="label-text">Your Name</span>
              </label>
              <input type="text" name="userName" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" defaultValue={user.displayName} readOnly />
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
            <textarea name="description" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" rows="3" placeholder="Write a short description..." defaultValue={description}></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4 w-full">
            <button type="submit" className="btn btn-primary text-lg text-white w-full rounded-[2px]">Update Group</button>
          </div>
        </form>
      </div>
    </Slide>
  );
};

export default CreateGroup;
