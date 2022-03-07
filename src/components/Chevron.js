import React, { useState } from 'react';

const Chevron = ({ index }) => {
    const [toggleChevron, setToggleChevron] = useState(false)

    const handleToggleClick = () => {
        setToggleChevron(!toggleChevron)
    }
    return (
        <div className={`chevron ${index % 2 ? 'odd' : 'even'} ${toggleChevron ? 'chevron-toggle' : ''}`} onClick={handleToggleClick}>
            <img src="https://img.icons8.com/external-ayo-icons-royyan-wijaya/24/000000/external-chevron-arrow-line-ayo-icons-royyan-wijaya-3.png" alt='chevron' data-bs-toggle="collapse" data-bs-target={`#card${index}`} aria-controls="card" />
        </div>
    );
};

export default Chevron;