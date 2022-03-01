import React, { useState } from 'react';
import '../style/_cardCertif.scss';

const CardCertif = ({ background, img, title, subtitle }) => {
    const [certificate, setCertificate] = useState(false)


    return (
        <div className="col-3 card-certif text-light mx-5 p-0">
            <div className="row position-relative justify-content-center">
                <div className={`col-12 header text-center text-light ${background} p-0`}>
                    <img src="https://cdn.worldvectorlogo.com/logos/codingame-1.svg" alt="codeingame" />
                </div>
                <div className="overlay"></div>
                <div className="col-12 text-center p-2">
                    <h3>{title}</h3>
                </div>
                <div className="col-12 text-center">
                    <h4>{subtitle}</h4>
                </div>
            </div>
        </div >
    );
};

export default CardCertif;