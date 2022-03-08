import React, { useState } from 'react';

const TimelineCard = ({ item, index, uuid, themeColor }) => {
    const [toggleChevron, setToggleChevron] = useState(false)


    const handleToggleClick = () => {
        setToggleChevron(!toggleChevron)
    }

    return (
        <div className={`card theme-bg-light-${themeColor} w-100`}>
            <div className="card-header position-relative" data-bs-toggle="collapse" data-bs-target={`#card${uuid}`} aria-controls="card" onClick={handleToggleClick}>
                <div className={`card-body theme-title-dark`}>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.subtitle}</p>
                </div>
                <div className={`chevron ${index % 2 ? 'odd' : 'even'} ${toggleChevron ? 'chevron-toggle' : ''}`} onClick={handleToggleClick}>
                    <img src="https://img.icons8.com/external-ayo-icons-royyan-wijaya/24/000000/external-chevron-arrow-line-ayo-icons-royyan-wijaya-3.png" alt='chevron' data-bs-toggle="collapse" data-bs-target={`#card${uuid}`} aria-controls="card" />
                </div>
            </div>
            <div className="collapse" id={`card${uuid}`}>
                <div className={`card card-body bg-transparent theme-text-${themeColor}`}>
                    {item.description}
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;