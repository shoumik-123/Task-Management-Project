import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { FaBars, FaCheckCircle, FaHouseDamage, FaPen, FaRegTrashAlt, FaSearch } from 'react-icons/fa';
import { NavLink ,Link } from 'react-router-dom';
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

const MasterLayout = ({children}) => {

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
            <div className="main-container" style={{ width: isOpen }}>
                <div>
                    <motion.div
                        className="sidebar"
                        initial="closed"
                        animate="open"
                        variants={sidebarVariants}
                    >
                        <div className="top-section">
                            {isOpen && <motion.h1 initial="hidden" animate="show" exit="hidden" variants={inputAnimation} className="logo">logo</motion.h1>}

                            <div>
                                <FaBars onClick={toggle} />
                            </div>
                        </div>

                        <div className="search-bar">
                            <div className="search-icon">
                                <FaSearch />
                            </div>
                            <AnimatePresence>
                                {isOpen &&<motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} placeholder="Search" />}
                            </AnimatePresence>

                        </div>

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




                <div>
                    <nav className="navbar">

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

                    <main className="content">
                        {children}
                    </main>

                </div>
            </div>
        </div>
    );
};

export default MasterLayout;