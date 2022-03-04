import React from 'react';
import '../style/_stepYear.scss';

const StepYear = ({ year }) => {
    return (
        <div className='step-year'>
            <p>{year}</p>
        </div>
    );
};

export default StepYear;