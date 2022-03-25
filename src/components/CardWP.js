import React from 'react';

const CardWP = ({ link, title, background }) => {

    return (
        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-3 card-project-wp p-2'>
            <a href={`https://github.com/Keongy/${link}`} target='_blank' rel="noreferrer">
                <img className='p-2' src='../img/restaurant_signature.jpg' alt="" />
            </a>
        </div>
    );
};

export default CardWP;