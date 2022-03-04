import React from 'react';
import '../style/_cardProject.scss';

const CardProject = ({ title, description, date, logos }) => {

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 card-project p-2'>
            <div className="col-12 card-body bg-dark text-light h-100">
                <h1>{title}</h1>
                <p className='description'>{description}</p>
                <div className="row p-0">
                    <div className="col-8 p-0">
                        <p>{date}</p>
                    </div>
                    <div className="col-4 p-0">
                        {logos.map((logo, index) => {
                            return (
                                <img key={index} src={logo} alt="" />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProject;