import React from 'react';
import './HomeBox.css';
import {ReactTyped} from "react-typed";

const HomeBox: React.FC = React.memo(() => {
    return (
        <div className="image-container">
            <div className="top-container">
                    <div className="AnimatedTyping-container">
                        <div className="AnimatedTyping">
                            <p className="animated-typing">
                                <ReactTyped
                                    strings={[
                                        "My name <br/> is <strong>Lennart Sargezian</strong>",
                                        "I'm a <br/> <strong>Front-end Developer</strong> ",
                                        "Let's have a talk over a cup of <br/> <strong>Coffee!!!!</strong>",
                                    ]}
                                    typeSpeed={150}
                                    backSpeed={100}
                                    loop
                                />
                            </p>
                        </div>
                </div>

                <div className="profile-columns">
                    <div className="column">
                        <div className="text-container">
                            <p className="hover-text">Denmark 📍</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="text-container">
                            <p> +45 42 71 99 75 📞</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="text-container">
                            <p>Lennart@mail.dk ✉️</p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={require('../../assets/lennart.png')}
                alt="Lennart"
                className="lennart-style"
            />
        </div>
    );
});

export default HomeBox;
