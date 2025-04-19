import React from 'react';
import Fade from 'react-reveal';

import './experience.css'
import expImg from '../../assets/svg/experience/expImgBlack.svg'

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {

    return (
        <Fade bottom>
            <div key={id} className={`experience-card`}>
                <div className="expcard-img">
                    <img src={expImg} alt="" />
                </div>
                <div className="experience-details">
                    <h6>{startYear}-{endYear}</h6>
                    <h4>{jobtitle}</h4>
                    <h5>{company}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default ExperienceCard