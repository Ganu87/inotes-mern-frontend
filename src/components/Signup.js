import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const host = "http://localhost:5001/api";
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({ name: "", email: "", password: "", cpassword: "" })

    const onChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`${host}/auth/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name:signUp.name,email: signUp.email, password: signUp.password }),

        });
        const signRes = await response.json()
        if (signRes.success) {
            localStorage.setItem("auth-token", signRes.data.authToken);
            navigate("/");
        } else {
            props.showAlert("Error Occured while signup","danger");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onchange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>
    )
}

export default Signup