import React from 'react';
import Fade from 'react-reveal';

import './education.css'
import eduImg from '../../assets/images/eduImgBlack.svg'

function EducationCard({ id, institution, course, startYear, endYear, location }) {

    return (
        <Fade bottom>
            <div key={id} className={'education-card'} >
                <div className="educard-img">
                    <img src={eduImg} alt="" />
                </div>
                <div className="education-details">
                    <h6 >{startYear}-{endYear}</h6>
                    <h4 >{course}</h4>
                    <h5 >{institution}</h5>
                    <h5 >{location}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default EducationCard