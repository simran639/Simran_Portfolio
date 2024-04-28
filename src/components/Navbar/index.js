import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5'
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { NavHashLink as NavLink } from 'react-router-hash-link'
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css'

import { headerData } from "../../data/headerData"

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1>
                    {headerData.name}
                </h1>
                <IoMenuSharp
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                    id='navicon'
                />
            </div>
            <Drawer
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='right'
                open={open}
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <NavLink
                            to='/'
                            smooth={true}
                            spy='true'
                            duration={2000}
                        >
                            <div className="drawerItem">
                                <IoHomeSharp
                                    className="drawerIcon"
                                />
                                <span className="drawerLinks">
                                    Home
                                </span>
                            </div>
                        </NavLink>

                        <NavLink
                            to='/#about'
                            smooth={true}
                            spy='true'
                            duration={2000}
                        >
                            <div className="drawerItem">
                                <FaUser className="drawerIcon" />
                                <span className="drawerLinks">
                                    About
                                </span>
                            </div>
                        </NavLink>

                        <NavLink
                            to='/#education'
                            smooth={true}
                            spy='true'
                            duration={2000}
                        >
                            <div className="drawerItem">
                                <HiDocumentText
                                    className="drawerIcon"
                                />
                                <span className="drawerLinks">
                                    Education
                                </span>
                            </div>
                        </NavLink>

                        <NavLink
                            to='/#skills'
                            smooth={true}
                            spy='true'
                            duration={2000}
                        >
                            <div className="drawerItem">
                                <BsFillGearFill
                                    className="drawerIcon"
                                />
                                <span className="drawerLinks">
                                    Skills
                                </span>
                            </div>
                        </NavLink>

                        <NavLink
                            to='/#projects'
                            smooth={true}
                            spy='true'
                            duration={2000}
                        >
                            <div className="drawerItem">
                                <FaFolderOpen
                                    className="drawerIcon"
                                />
                                <span className="drawerLinks">
                                    Projects
                                </span>
                            </div>
                        </NavLink>

                        <NavLink
                            to='/#contacts'
                            smooth={true}
                            spy='true'
                            duration={2000}
                        >
                            <div className="drawerItem">
                                <MdPhone className="drawerIcon" />
                                <span className="drawerLinks">
                                    Contact
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}
export default Navbar