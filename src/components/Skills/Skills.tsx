import React from 'react';
import './Skills.css';

const Skills: React.FC = React.memo(() => {
    return (

        <>
        <div className="Technical-skill">
            Technical Skills
        </div>

        <div className="skills-container">
            <div className="skills-category">
                <h2 className="category-title">Programming</h2>
                <p>JavaScript/TypeScript, Java, C#, HTML5/CSS3, SCSS, Shell Script</p>
            </div>
            <div className="skills-category">
                <h2 className="category-title">Frameworks</h2>
                <p>React, React Native, Blazor, Spring Boot, AngularJS, ASP.NET</p>
            </div>
            <div className="skills-category">
                <h2 className="category-title">Development & Operations</h2>
                <p>Git, Docker, Azure, Agile, Scrum, CI/CD, JUnit, REST, GraphQL, Socket</p>
            </div>
            <div className="skills-category">
                <h2 className="category-title">Databases & Tools</h2>
                <p>Firebase, PostgreSQL, NoSQL, MAC/PC/LINUX/BASH</p>
            </div>
        </div>
            </>
    );
});

export default Skills;
