import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="nav">
            <ul className="ul">
                <li className="li">
                    <Link to="/" className="link">Experience</Link>
                </li>
                <li className="li">
                    <Link to="/" className="link">Projects</Link>
                </li>
                <li className="li">
                    <Link to="/" className="link">Education</Link>
                </li>
                <li className="li">
                    <Link to="/" className="link">Skills</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
