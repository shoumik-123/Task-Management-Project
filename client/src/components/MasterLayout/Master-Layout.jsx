import React, { useState, useEffect } from "react";
import "../../assets/css/sideNav.css";
import "../../assets/css/style.css";
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FaCube, FaHome, FaSearch, FaSignOutAlt} from "react-icons/fa";
import {Link} from "react-router-dom";


const SideNav = () => {

    const [searchValue, setSearchValue] = useState("");

    function handleSearchChange(event) {
        setSearchValue(event.target.value);
    }




    const [showNav, setShowNav] = useState(false);

    const openNav = () => {
        setShowNav(true);
    };

    const closeNav = () => {
        setShowNav(false);
    };

    const handleEscKey = (e) => {
        if (e.key === "Escape") {
            closeNav();
        }
    };

    useEffect(() => {
        if (showNav) {
            document.addEventListener("keydown", handleEscKey);
        }
        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [showNav]);

    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "250px" : "0" };

    return (

        <>
            <div>
                <Navbar bg="dark" variant="dark" expand="xl">
                    <Navbar.Brand href="#"><FaCube />Brand<b>Name</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarCollapse" />
                    <Navbar.Collapse id="navbarCollapse">
                        <Form inline>
                            <FormControl type="text" placeholder="Search here..." className="mr-sm-2" />
                            <Button variant="outline-light"><FaSearch /></Button>
                        </Form>
                        <Nav className="ml-auto">
                            <Link to="/" active><FaHome />Home</Link>
                            <Link to="/" active><FaHome />Home</Link>
                            <Link to="/" active><FaHome />Home</Link>
                            <Link to="/" active><FaHome />Home</Link>
                            <Link to="/" active><FaHome />Home</Link>
                            <Link to="/" active><FaHome />Home</Link>
                            {/*<Nav.Link href="#"><FaGears />Projects</Nav.Link>*/}
                            {/*<Nav.Link href="#"><FaUsers />Team</Nav.Link>*/}
                            {/*<Nav.Link href="#"><FaPieChart />Reports</Nav.Link>*/}
                            {/*<Nav.Link href="#"><FaBriefcase />Careers</Nav.Link>*/}
                            {/*<Nav.Link href="#"><FaEnvelope />Messages</Nav.Link>*/}
                            {/*<Nav.Link href="#"><FaBell />Notifications</Nav.Link>*/}


                            <NavDropdown title={<div><img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar" alt="Avatar" />Antonio Moreno<b className="caret"></b></div>} id="basic-nav-dropdown">
                                {/*<NavDropdown.Item href="#"><FaUserO />Profile</NavDropdown.Item>*/}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#"><FaSignOutAlt />Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>








      <span onClick={openNav} className="open-nav">
        &#9776; open
      </span>
            <div
                onClick={closeNav}
                className="nav-cover"
                style={navCoverStyle}
            ></div>
            <div name="side-nav" className="side-nav" style={sideNavStyle}>
                <a href="#" onClick={closeNav} className="close-nav">
                    &times;
                </a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </>
    );
};

export default SideNav;

