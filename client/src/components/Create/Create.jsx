import React from 'react';
import {Container, Row} from "react-bootstrap";

const Create = () => {
    return (
        <div className="content-body container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 >Create New</h4>
                            <br/>
                            <input placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <textarea rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <button className="btn float-end btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;