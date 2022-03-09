const CardCertif = ({ themeColor, background, img, title, subtitle, link }) => {

    return (
        <div className="col-xs-12 col-md-6 col-xl-3 p-3 m-0">
            <div className="row position-relative card-certif justify-content-center m-0">
                <a href={link} target='_blank' rel="noreferrer" className="p-0">
                    <div className={`col-12 position-relative header text-center  p-0`}>
                        <img src={img} alt="codeingame" />
                        <div className="fadeIn">
                            <h3 className="m-0">CERTIFICATE</h3>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </a>
                <div className="card-bottom">
                    <div className="col-12 text-center p-2">
                        <h3 className={`theme-title-${themeColor}`}>{title}</h3>
                    </div>
                    <div className="col-12 text-center">
                        <h4 className={`theme-text-${themeColor}`}>{subtitle}</h4>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CardCertif;