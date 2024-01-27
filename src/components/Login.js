import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Importez Navigate à la place de Redirect
import axios from "axios";

import logoo from "../assets/images/logos/dark-logo.svg";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/auth/authenticate", { email, password });
            localStorage.setItem("token", response.data.token);
            setIsLoggedIn(true);
        } catch (err) {
            setError(err.message);
        }
    };

    if (isLoggedIn) {
        // Utilisez Navigate pour rediriger après une connexion réussie
        return <Navigate to="/home" replace />;
    }

    return (
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
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
                                        {error && <div className="alert alert-danger">{error}</div>}
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Link className="text-primary fw-bold ms-2" to="/register">Create an account</Link>
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

export default Login;
