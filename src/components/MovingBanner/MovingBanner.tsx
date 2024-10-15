import React from 'react';

import './MovingBanner.css';

const MovingBanner: React.FC = React.memo(() => {
    return (
        <div className="marquee">
            <div className="marquee-content">
                Frontend Developer - Graphic Designer - Web Developer - UI Designer - Mobile Developer - Frontend Developer - UI/UX Developer -
                Frontend Developer - Graphic Designer - Web Developer - UI Designer - Mobile Developer - Frontend Developer - UI/UX Developer
            </div>
        </div>


    );
});

export default MovingBanner;
