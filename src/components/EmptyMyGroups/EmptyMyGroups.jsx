import React from 'react';
import { Link } from 'react-router';

const EmptyMyGroups = () => {
    return (
        <div className='flex justify-center pt-[90px] md:pt-[120px]'>
            <div className="text-center">
                <h2 className="text-2xl lg:text-3xl font-semibold white-text-dark-mode text-gray-700">No Groups Found</h2>
                <p className="text-gray-500 mt-3">You haven’t created or joined any hobby group yet.</p>
                <div className="mt-7">
                    <Link to={'/createGroup'} className="px-5 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
                     Create a Group
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default EmptyMyGroups;