import React from 'react';
import '../style/_cardDegrees.scss';

const CardDegrees = ({ title, subtitle, year, logo }) => {
    return (
        <div className="col-9 card-degrees text-light p-5">
            <div className="row align-items-center justify-content-between">
                <div className="col-2 text-center">
                    <img src={logo} alt="cnam" />
                </div>
                <div className="col-8 ps-5 text-light">
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                </div>
                <div className="col-2 text-center">{year}</div>
            </div>
        </div>
    );
};

export default CardDegrees;