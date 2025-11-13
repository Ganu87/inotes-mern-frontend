import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        navigate("/login");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                        </ul>
                        { !localStorage.getItem("auth-token")?<form className="d-flex">
                            <Link className='btn btn-primary mx-2' to="/login" role='button'>Login</Link>
                            <Link className='btn btn-primary mx-2' to="/signup" role='button'>SignUp</Link></form>
                            :<button className='btn btn-primary mx-2' onClick={handleLogout}>Logout</button>
                        
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar