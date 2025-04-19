import React from 'react';
import Marquee from "react-fast-marquee";

import './skills.css'

import { skillsData } from '../../data/codingSkillsData'
import {cyberSkillsData} from '../../data/cyberSkillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const skillBoxStyle = {
        backgroundColor: '#1a4301',
        boxShadow: `5px 5px 15px #aad576`
    }

    return (
        <div id="skills" className="skills">
            <div className="skillsHeader">
                <h2>Coding Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <br></br>
            <div className="skillsHeader">
                <h2>Cybersecurity Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {cyberSkillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills