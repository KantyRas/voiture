import {Link} from "react-router-dom";
import logoo from "../assets/images/logos/dark-logo.svg";
import React from "react";

function Register(){
    return(
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
             data-sidebar-position="fixed" data-header-position="fixed">
            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <Link to="/" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                        <img src={logoo} width="180" alt="logo-sary"/>
                                    </Link>
                                    <p className="text-center">Your Social Campaigns</p>
                                    <form action="#" method="">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Firstname</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Lastname</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <input type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" value="Sign Up"/>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Link className="text-primary fw-bold ms-2" to="/login">Log in</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;