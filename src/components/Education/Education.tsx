import React from 'react';
import './Education.css';
// @ts-ignore
import viaLogo from '../../assets/Via.png';
const Education: React.FC = React.memo(() => {
    return (
        <>
            <div className="education-header">
                Education
            </div>
            <div className="education-container">
                <div className="degree">
                    <div className="degree-text">
                        <span className="university">VIA University College – Denmark</span>
                        <span className="dates">08/2020 - 08/2024</span>
                    </div>
                    <img src={viaLogo} alt="VIA University Logo" className="university-logo" />
                </div>
                <div className="program">
                    Bachelor of Engineering in Software Technology
                </div>
                <div className="coursework">
                    <span className="coursework-header">Relevant Coursework: </span>
                    <span>Algorithms, Data Structures, Networking & Security, Distributed Systems, DBMS, Operating Systems</span>
                </div>
            </div>
        </>
    );
});

export default Education;
