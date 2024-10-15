import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {


    const scrollTo = (componentId: string) => {
        const targetComponentNode = document.getElementById(componentId);
        if (targetComponentNode) {
            window.scrollTo({
                top: targetComponentNode.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="nav">
            <p className="ul">
                <p className="li" onClick={(e) => { e.preventDefault(); scrollTo("experience"); }}>
                    <Link to="/" className="link">Experience</Link>
                </p>
                <p className="li" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>
                    <Link to="/" className="link">Projects</Link>
                </p>
                <p className="li" onClick={(e) => { e.preventDefault(); scrollTo("education"); }}>
                    <Link to="/" className="link">Education</Link>
                </p>
                <p className="li" onClick={(e) => { e.preventDefault(); scrollTo("skills"); }}>
                    <Link to="/" className="link">Skills</Link>
                </p>
            </p>
        </nav>
    );
};

export default Navbar;
