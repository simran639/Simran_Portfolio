import React from 'react';

import './experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './experienceCard';
import expImg from '../../assets/svg/experience/expGreen.svg'

function Experience() {
    return (
        <div className="experience" id="experience">
            <div className="experience-body">
                <div className="experience-image">
                    <img src={expImg} alt="" />
                </div>
                <div className="experience-description">
                    <h1>Experience</h1>
                    {experienceData.map(exp => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience