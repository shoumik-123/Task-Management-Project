import React from 'react';
import { motion } from 'framer-motion';

const Create = () => {


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
        <div className="content-body container-fluid p-5">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
                    <motion.div variants={inputAnimation} initial="hidden" animate="show" exit="hidden"  className="card p-3">
                        <div className="card-body">
                            <h4 >Create New Task</h4>
                            <br/>
                            <input placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <textarea rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <button className="btn float-end btn-primary">Create</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Create;