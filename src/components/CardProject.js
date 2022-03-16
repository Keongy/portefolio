import React from 'react';
import '../style/_cardProject.scss';

const CardProject = ({ link, title, description, date, logos, themeColor }) => {

    return (
        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-3 card-project p-2'>
            <a href={`https://github.com/Keongy/${link}`} target='_blank' rel="noreferrer">
                <div className={`col-12 card-body text-light theme-bg-light-${themeColor} h-100`}>
                    <h1>{title}</h1>
                    <p className='description'>{description}</p>
                    <div className="row align-items-center justify-content-between p-0">
                        <div className="col-auto p-0">
                            <p className={`theme-text-${themeColor}`}>{date}</p>
                        </div>
                        <div className="col-auto logo-row d-flex p-0">
                            {logos.logos.map((logo, index) => {
                                return (
                                    <div className='logo text-center' key={index}>
                                        <p>{logo.title}</p>
                                        <img src={logo.img} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default CardProject;