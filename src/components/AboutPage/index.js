import React from 'react';

import './about.css';
import { aboutData } from '../../data/aboutData'


const About = () => {

    return (
        <div className="about" id="about">
            <div className="line-styling">
                <div className="style-circle" ></div>
                <div className="style-circle" ></div>
                <div className="style-line" ></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2>{aboutData.title}</h2>
                    <p>{aboutData.description1}<br /><br />{aboutData.description2}</p>
                    <br /><br />
                    <p>{aboutData.description3}</p>
                </div>
                <div className="about-img">
                    <img
                        src={aboutData.image}
                        alt=""
                    />
                </div>
            </div>
        </div>

    )
}

export default About