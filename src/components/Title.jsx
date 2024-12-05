import React from 'react';

const Title = ({title,subTitle}) => {
    return (
        <div className='w-1/2 mx-auto text-center space-y-4'>
            <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className=''>{subTitle}</p>
        </div>
    );
};

export default Title;