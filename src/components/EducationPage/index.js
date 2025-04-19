import React from 'react';

import './education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/eduData'
import eduImage from '../../assets/images/eduGreen.svg'

function Education() {
    return (
        <div className="education" id="education">

            <div className="education-body">
                <div className="education-image">
                    <img src={eduImage} alt="" />
                </div>
                <div className="education-description">
                    <h1>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            location={edu.location}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Education