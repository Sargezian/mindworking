import React from 'react';
import './Experience.css';

const Experience: React.FC = React.memo(() => {
    return (

        <div className="experience-container-holder">

        <div className="experience-title">
            My experience as a software developer
        </div>

            <div className="experience-subtitle">
                Working in the heart of Los Angeles as a Full-Stack developer
            </div>

        <div className="experience-container">
            <div className="job-item">
                <h2 className="company-name">Dreamwaymedia.com – Glendale, CA</h2>
                <p className="job-dates">06/2022 – 08/2023</p>
                <div className="job-item-row">
                <p className="job-title">Full Stack Developer</p>
                <img
                    src={require('../../assets/dream.png')}
                    alt="dream"
                    className="dream"
                />
                    </div>
                <ul className="job-responsibilities">
                    <li>Developed a cross-platform mobile app using React Native, React Navigation & Expo.</li>
                    <li>Implemented custom UI components/features for the mobile app based on Figma designs.</li>
                    <li>Integrated with RESTful APIs and Redux for state management.</li>
                    <li>Utilized props in React to pass dynamic data throughout the application.</li>
                    <li>Refactored a key React component by implementing Higher-Order Components (HOCs), improving code reusability and maintainability.</li>
                    <li>Developed a custom React hook to streamline functionality across the application, enabling consistent state management and reducing code duplication.</li>
                    <li>Collaborated with team members through Git for code reviews and pull requests, optimizing code based on peer feedback.</li>
                </ul>
                <p className="skills">Skills: JavaScript · TypeScript · React/React Native · Firebase · Git · REST</p>
            </div>
            <div className="job-item">
                <h2 className="company-name">Altamed.org - Montebello, CA</h2>
                <p className="job-dates">01/2022 - 04/2022</p>
                <div className="job-item-row">
                    <p className="job-title">Software Engineer Intern</p>
                    <img
                        src={require('../../assets/AltaMed.jpg')}
                        alt="altamed"
                        className="altamed"
                    />
                </div>

                <ul className="job-responsibilities">
                    <li>Implemented Multi-factor Authentication for Login by following a three Tier architecture system.</li>
                    <li>Integrated CI/CD for faster, reliable deployments using Docker.</li>
                    <li>Used C#, AngularJS & SQL to develop business logic, front-end & database.</li>
                    <li>Participated in daily SCRUM meetings to contribute to the development of effective solutions.</li>
                    <li>Coded applications in compliance with HIPAA regulations to ensure personal health information is handled securely.</li>
                </ul>
                <p className="skills">Skills: C# · AngularJS · Microsoft SQL Server · Docker · REST · Git</p>
            </div>
        </div>
        </div>
    );
});

export default Experience;
