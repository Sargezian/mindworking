import React from 'react';
import HomeBox from "../components/HomeBox/HomeBox";
import MovingBanner from "../components/MovingBanner/MovingBanner";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import { Grid } from "@nextui-org/react";
import {MyTradingApp} from "../components/Project/MyTradingApp";
import {ShineBeauty} from "../components/Project/ShineBeauty";
import {MyFoodie} from "../components/Project/MyFoodie";
import {Pentia} from "../components/Project/Pentia";
import './Home.css';

const Home: React.FC = React.memo(() => {
    return (
        <div>
            <HomeBox/>
            <MovingBanner/>

            <div id="experience">
            <Experience/>
            </div>

            <div id="projects" className="contentContainer">
                <p className="TitleText">Previous Projects</p>
                <Grid.Container gap={2} justify="center">
                    <MyTradingApp />
                    <ShineBeauty />
                    <MyFoodie />
                    <Pentia />
                </Grid.Container>
            </div>
            <div id="education">
            <Education/>
            </div>
            <div id="skills">
            <Skills/>
            </div>
        </div>

    );
});

export default Home;
