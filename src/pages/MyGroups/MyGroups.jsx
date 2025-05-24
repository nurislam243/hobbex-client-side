import React, { useContext, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';
import { Tooltip } from 'react-tooltip'
import Swal from 'sweetalert2';
import EmptyMyGroups from '../../components/EmptyMyGroups/EmptyMyGroups';
import { filterInitialMyGroups } from '../../utils/utils';
import { AuthContext } from '../../context/AuthContext';
import { Slide, Zoom } from 'react-awesome-reveal';
import { format } from 'date-fns';

const MyGroups = () => {
  const { user } = useContext(AuthContext);
    const allGroups = useLoaderData();
    const initialGroups = filterInitialMyGroups(allGroups, user);
    const [groups, setGroups] = useState(initialGroups);
    console.log(user);


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

          fetch(`https://hobbex-server.vercel.app/groups/${id}`, {
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
      <Slide triggerOnce>
        <div className="pt-10">       
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            My Groups
          </h2>
          <p className="text-center text-base-content mb-10 max-w-2xl mx-auto">
            Here you’ll find all the groups you’ve joined, thoughtfully organized in one place to give you easy and quick access whenever you need.
          </p>

          <div className='bg-white black-bg-dark-mode shadow-md min-h-[60vh] lg:p-7'>
          {
            groups.length === 0 ? <EmptyMyGroups></EmptyMyGroups> : 
                      <div className="overflow-x-auto">
                        <table className="table">
                          {/* head */}
                            <thead>
                              <tr className='text-center space-x-0'>
                                <th>Group</th>
                                <th>Category</th>
                                <th>Max Members</th>
                                <th>Meeting Location</th>
                                <th className='max-w-[532px]'>Description</th>
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
                                          <div className="h-12 w-12 @min-[340px]:h-[60px] @min-[340px]:w-[60px] @min-[500px]:h-[80px] @min-[500px]:w-[80px] @min-[700px]:h-[100px] @min-[700px]:w-[100px] @min-[900px]:h-[115px] @min-[900px]:w-[115px] @min-[1100px]:h-[125px] @min-[1100px]:w-[125px] @min-[1280px]:h-[135px] @min-[1280px]:w-[135px]">
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
                                    <td>{group.maxMembers}</td>
                                    <td>{group.metingLocation}</td>
                                    <td className=''>
                                      <p className='max-w-[532px] min-w-[389px]'>
                                        <span className='hidden 2xl:block'>
                                          {group.description.slice(0, 358)} {group.description.length > 358 ? 
                                          <span className='font-extrabold'>...</span> : ''}
                                        </span>
                                        <span className='hidden xl:block 2xl:hidden'>
                                          {group.description.slice(0, 290)} {group.description.length > 290 ? 
                                          <span className='font-extrabold'>...</span> : ''}
                                        </span>
                                        <span className='hidden lg:block xl:hidden'>
                                          {group.description.slice(0, 209)} {group.description.length > 209 ? 
                                          <span className='font-extrabold'>...</span> : ''}
                                        </span>
                                        <span className='hidden md:block lg:hidden'>
                                          {group.description.slice(0, 177)} {group.description.length > 177 ? 
                                          <span className='font-extrabold'>...</span> : ''}
                                        </span>
                                        <span className='hidden sm:block md:hidden'>
                                          {group.description.slice(0, 150)} {group.description.length > 150 ? 
                                          <span className='font-extrabold'>...</span> : ''}
                                        </span>
                                        <span className='sm:hidden'>
                                          {group.description.slice(0, 120)} {group.description.length > 120 ? 
                                          <span className='font-extrabold'>...</span> : ''}
                                        </span>
                                      </p>
                                    </td>
                                    <td>
                                      {group.startDate
                                        ? format(new Date(group.startDate), 'd MMM yyyy')
                                        : 'No Date'}
                                    </td>
                                    <td className='flex flex-col items-center gap-2 sm:gap-4 md:gap-6'>
                                      <Link 
                                        className='text-primary/80 mt-2 sm:mt-4 md:mt-5 lg:mt-6 2xl:mt-7'
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
                                        className='cursor-pointer text-error/80'
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
      </Slide>
    );
};

export default MyGroups;