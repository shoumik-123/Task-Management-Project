import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {

     let passRef , emailRef = useRef()
    const SubmitLogin = ()=>{
         let email = emailRef.value;
         let password = passRef.value;


    }




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
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-7 col-lg-6 center-screen">
                    <motion.div initial="hidden" animate="show" exit="hidden" className="card w-100 p-4" variants={inputAnimation}>
                        <div className="card-body">
                            <motion.h5 initial="hidden" animate="show" exit="hidden"  variants={inputAnimation}>Sign In</motion.h5>
                            <br/>
                            <input ref={(input)=> emailRef=input} placeholder="User Email" type="email" className="form-control"/>
                            <br/>
                            <input ref={(input)=> passRef=input} placeholder="User Password" type="password" className="form-control"/>
                            <br/>
                            <button onClick={SubmitLogin} className="btn w-100 btn-primary mb-5 animated fadeInUp">Next</button>
                            <div className="text-center">
                                <Link to="/registration" className="text-decoration-none">Sign Up</Link>
                                <br/>
                                <Link to="/forgetPassword" className="text-decoration-none">Forget Password</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Login;
