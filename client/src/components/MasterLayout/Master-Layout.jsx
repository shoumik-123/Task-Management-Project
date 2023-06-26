import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
    FaBars,
    FaBatteryThreeQuarters,
    FaCheckCircle,
    FaHouseDamage,
    FaPen, FaPenNib,
    FaRegTrashAlt
} from 'react-icons/fa';
import {NavLink, Link, Outlet} from 'react-router-dom';
import '../../assets/css/sideBar.css';
import '../../assets/css/navbar.css'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        icon: FaHouseDamage,
    },
    {
        path: '/create',
        name: 'Create',
        icon: FaPen,
    },

    {
        path: '/all',
        name: 'New',
        icon: FaPenNib,
    },
    {
        path: '/progress',
        name: 'Progress',
        icon: FaBatteryThreeQuarters,
    },
    {
        path: '/complete',
        name: 'Complete',
        icon: FaCheckCircle,
    },
    {
        path: '/cancel',
        name: 'Cancel',
        icon: FaRegTrashAlt,
    },
];

const MasterLayout = () => {

    // sidebar
    const sidebarVariants = {
        open: { x: 1 },
        closed: { x: '-100%' },
    };

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const inputAnimation = {
        hidden:{
            width:"0",
            padding:"0",
            opacity:0,
            transition:{
                duration:0.15
            }
        }
        ,
        show:{
            width: "140px",
            padding: "5px 15px",
            transition:{
                duration:0.2
            },
            opacity: 1
        }
    }




    //Navbar
    const [isOpenNavbar, setIsOpenNavbar] = useState(false);
    const toggleMenu = () => {
        setIsOpenNavbar(!isOpenNavbar);
    };

    return (

        <div>
            <nav className="navbar">
                <div className="top-section">
                    <div>
                        <FaBars onClick={toggle} />
                    </div>
                    <motion.h1 initial="hidden" animate="show" exit="hidden" variants={inputAnimation} className="logo">logo</motion.h1>

                </div>

                <div className="profile-menu">
                    <button className="profile-menu-toggle" onClick={toggleMenu}>
                        <img
                            className="profile-menu-avatar"
                            src="https://media.licdn.com/dms/image/C4E03AQHouDS3TNY96Q/profile-displayphoto-shrink_800_800/0/1622655546895?e=2147483647&v=beta&t=1LQHT03FVCrZ7c6RyCqc678C4vd6pSUbgjMBznklNiQ"
                            alt="Profile Avatar"
                        />
                    </button>
                    {isOpenNavbar && (
                        <ul className="profile-menu-dropdown">
                            <li>
                                <Link to="https://www.facebook.com/shoumik152/" target="_blank">Profile</Link>
                            </li>
                            <li>
                                <Link to="/settings">Settings</Link>
                            </li>
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>


            <div className="main-container" style={{ width: isOpen }}>
                <div className="sidebar">
                    <motion.div className="sidebar" initial="closed" animate="open" variants={sidebarVariants}>


                        <section className="routes">
                            {routes.map((route) => (
                                <NavLink activeClassName="active" to={route.path} key={route.name} className="link">
                                    <div className="icon">
                                        <route.icon/>
                                    </div>
                                    <AnimatePresence>
                                        {isOpen && <motion.div className="link-text" initial="hidden" animate="show" exit="hidden" variants={inputAnimation} >{route.name}</motion.div>}
                                    </AnimatePresence>

                                </NavLink>
                            ))}
                        </section>
                    </motion.div>
                </div>

                <div className="content">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;