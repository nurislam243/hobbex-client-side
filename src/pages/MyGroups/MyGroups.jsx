import React, { useContext, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';
import { Tooltip } from 'react-tooltip'
import Swal from 'sweetalert2';
import EmptyMyGroups from '../../components/EmptyMyGroups/EmptyMyGroups';
import { filterInitialMyGroups } from '../../utils/utils';
import { AuthContext } from '../../context/AuthContext';

const MyGroups = () => {
  const { user } = useContext(AuthContext);
    const allGroups = useLoaderData();
    const initialGroups = filterInitialMyGroups(allGroups, user);
    const [groups, setGroups] = useState(initialGroups);
    console.log(groups);


    const handleDeleteGroup = (id) => {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

          fetch(`http://localhost:3000/groups/${id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount){
              Swal.fire({
                title: "Deleted!",
                text: "Your Group has been deleted successfully.",
                icon: "success", 
              });

              // updatedGroupState
              const currentGroups = groups.filter(group => group._id !== id);
              setGroups(currentGroups)
            }           
          })
          .catch(error => {
            console.log('Delete failed:', error);
          });


          
        }
      });

      
    }

    return (
      <div className="">
        <h1 className='text-3xl md:text-4xl text-primary text-center mt-[25px] mb-[18px]'>My Groups</h1>
        <div className='bg-white shadow-md min-h-[70vh] lg:p-7'>
          {
            groups.length === 0 ? <EmptyMyGroups></EmptyMyGroups> : 
                      <div className="overflow-x-auto">
                        <table className="table">
                          {/* head */}
                            <thead>
                              <tr className='text-center space-x-0'>
                                <th>Group</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Max Members</th>
                                <th>Start Date</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                            {
                              groups.map((group, index) => (
                                  <tr className='text-center space-x-0'>
                                    <td>
                                      <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
                                        <div className="avatar">
                                          <div className="h-12 w-12">
                                            <img
                                              src={group.imageURL}
                                              alt="" />
                                          </div>
                                        </div>
                                        <div>
                                          <div className="font-bold">{group.groupName}</div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      {group.hobbyCategory}
                                    </td>
                                    <td>{group.description.slice(0, 50)} ...</td>
                                    <td>{group.maxMembers}</td>
                                    <td>{group.startDate}</td>
                                    <td className='flex flex-col items-center gap-2'>
                                      <Link 
                                        data-tooltip-id={`tooltip-edit-${index}`}
                                        data-tooltip-content="Update this group"
                                        data-tooltip-place="top"
                                        to={`/updateGroup/${group._id}`}>
                                          <FaEdit size={20}/>
                                      </Link>
                                      <Tooltip id={`tooltip-edit-${index}`} />

                                      <button
                                        onClick={() => handleDeleteGroup(group._id)}
                                        data-tooltip-id={`tooltip-delete-${index}`}
                                        data-tooltip-content="Delete this group"
                                        data-tooltip-place="top"
                                        className='cursor-pointer'
                                      >
                                        <MdDeleteForever size={25} />
                                      </button>
                                      <Tooltip id={`tooltip-delete-${index}`} />
                                    </td>
                                  </tr>      
                                ))
                            }
                            </tbody>
                        </table>
                      </div>
          }
        </div>
      </div>
    );
};

export default MyGroups;