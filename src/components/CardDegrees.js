import React from 'react';

const CardDegrees = ({ themeColor, title, subtitle, year, logo, order }) => {
    return (
        <div className={`col-12 col-md-10 col-lg-6 py-3 px-0 px-lg-3 order-lg-${order}`}>
            <div className="row card-degrees py-2 align-items-center justify-content-between">
                <div className="col-2 text-center">
                    <div className={`theme-title-${themeColor}`}>{year}</div>
                </div>
                <div className='col-10 col-sm-8'>
                    <h2 className={`display-5 theme-title-${themeColor}`}>{title}</h2>
                    <h4 className={`display-text theme-text-${themeColor}`}>{subtitle}</h4>
                </div>
                <div className="logo d-none d-sm-flex justify-content-center align-items-center col-2">
                    <img src={logo} alt="cnam" />
                </div>
            </div>
        </div>
    );
};

export default CardDegrees;