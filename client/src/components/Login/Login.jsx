import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card animated fadeIn w-100 p-4">
                            <div className="card-body">
                                <h5>Sign In</h5>
                                <br/>
                                <input placeholder="User Email" type="email" className="form-control animated fadeInUp"/>
                                <br/>
                                <input placeholder="User Password" type="password" className="form-control animated fadeInUp"/>
                                <br/>
                                <button className="btn w-100 float-end btn-primary mb-5 animated fadeInUp">Next</button>
                                <div className="text-center w-100 ">
                                    <Link className="text-center text-decoration-none" to="/registration">Sign Up</Link>
                                    <br/>
                                    <Link className="text-center text-decoration-none" to="/forgetPassword">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;