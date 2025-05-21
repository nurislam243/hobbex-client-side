import React from 'react';

const Spinner = () => {
    return (
        <div className='absolute top-[350px] w-full flex justify-center'>
            <h3 className="loader w-2xl h-96"></h3>
        </div>
    );
};

export default Spinner;