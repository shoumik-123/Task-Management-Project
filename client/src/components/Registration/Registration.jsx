import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';

const Registration = () => {
    const inputAnimation = {
        hidden: {
            width: "0",
            padding: "0",
            opacity: 0,
            transition: {
                duration: 0.05
            }
        },
        show: {
            width: "100%",
            transition: {
                duration: 0.2
            },
            opacity: 1
        }
    };
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <motion.div initial="hidden" animate="show" exit="hidden"  variants={inputAnimation} className="card w-100 p-4">
                            <div className="card-body">
                                <motion.h5 initial="hidden" animate="show" exit="hidden"  variants={inputAnimation}>Sign Up</motion.h5>
                                <br/>
                                <input placeholder="First Name" type="text" className="form-control"/>
                                <br/>
                                <input placeholder="Last Name" type="text" className="form-control"/>
                                <br/>
                                <input placeholder="Mobile" type="number" className="form-control"/>
                                <br/>
                                <input placeholder="User Email" type="email" className="form-control"/>
                                <br/>
                                <input placeholder="User Password" type="password" className="form-control"/>
                                <br/>
                                <button className="btn w-100 float-end btn-primary mb-5">Next</button>
                                <div className="text-center w-100">
                                    <Link className="text-center text-decoration-none" to="/login">Sign In</Link>
                                    <br/>
                                    <Link className="text-center text-decoration-none" to="/forgetPassword">Forget Password</Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Registration;