import React from 'react';
import '../style/_cardDegrees.scss';

const CardDegrees = ({ themeColor, title, subtitle, year, logo, order }) => {
    return (
        <div className={`col-12 col-lg-6 p-3 order-lg-${order}`}>
            <div className="row card-degrees align-items-center justify-content-between">
                <div className="col-2 text-center">
                    <div className={`theme-title-${themeColor}`}>{year}</div>
                </div>
                <div className='col-8'>
                    <h2 className={`theme-title-${themeColor}`}>{title}</h2>
                    <h4 className={`theme-text-${themeColor}`}>{subtitle}</h4>
                </div>
                <div className="logo d-flex justify-content-center align-items-center col-2">
                    <img src={logo} alt="cnam" />
                </div>
            </div>
        </div>
    );
};

export default CardDegrees;