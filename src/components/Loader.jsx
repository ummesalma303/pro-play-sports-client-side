import React from 'react';
import { DNA } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='mx-auto flex justify-center'><DNA
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    /></div>
    );
};

export default Loader;