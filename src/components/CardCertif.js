import '../style/_cardCertif.scss';

const CardCertif = ({ themeColor, background, img, title, subtitle }) => {


    return (
        <div className="col-xs-12 col-md-6 col-xl-3 p-3 m-0">
            <div className="row position-relative card-certif justify-content-center m-0">
                <div className={`col-12 header text-center ${background} p-0`}>
                    <img src={img} alt="codeingame" />
                </div>
                <div className="overlay"></div>
                <div className="col-12 text-center p-2">
                    <h3 className={`theme-title-${themeColor}`}>{title}</h3>
                </div>
                <div className="col-12 text-center">
                    <h4 className={`theme-title-${themeColor}`}>{subtitle}</h4>
                </div>
            </div>
        </div >
    );
};

export default CardCertif;