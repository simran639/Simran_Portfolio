
import './homePage.css';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaDownload
} from 'react-icons/fa';
import Navbar from '../Navbar';
import AboutPage from '../AboutPage'
import EducationPage from '../EducationPage';
import SkillsPage from '../SkillsPage';
import ExperiencePage from '../ExperiencePage'
// import Contacts from '../ContactsPage';

function Landing() {

    return (
        <div>
            <div className='landing'>
                <Navbar></Navbar>
                <div className='landing--container'>
                    <div
                        className='landing--container-left'
                    >
                        <div className='lcl--content'>
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaLinkedin
                                        className='landing--social'
                                        aria-label='LinkedIn'
                                    />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaGithub
                                        className='landing--social'
                                        aria-label='GitHub'
                                    />
                                </a>
                            )}
                            {socialsData.instagram && (
                                <a
                                    href={socialsData.instagram}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaInstagram
                                        className='landing--social'
                                        aria-label='Instagram'
                                    />
                                </a>
                            )}
                            {/* {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )} */}
                        </div>
                    </div>
                    <img
                        src={headerData.image}
                        alt=''
                        className='landing--img'
                    />
                    <div
                        className='landing--container-right'
                    >
                        <div
                            className='lcr--content'
                        >
                            <h6>{headerData.welcometext}</h6>
                            <h1>{headerData.name}</h1>
                            <p>{headerData.titlestart} {headerData.title}</p>
                            <p>{headerData.description}</p>

                            <div className='lcr-buttonContainer'>
                                {headerData.resumePdf && (
                                    <a
                                        href={headerData.resumePdf}
                                        download='resume'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className="resumeBtn">
                                            <div className='resumeBtnText'> Download CV</div>
                                            <div className='resumeBtnIcon'> <FaDownload></FaDownload></div>

                                        </div>
                                    </a>
                                )}
                                {/* <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className="contactBtn">
                                    Contact
                                </Button>
                            </NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutPage></AboutPage>
            <EducationPage></EducationPage>
            <SkillsPage></SkillsPage>
            <ExperiencePage></ExperiencePage>
            {/* <Contacts></Contacts> */}
        </div>

    );
}

export default Landing;