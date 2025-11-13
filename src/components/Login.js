import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'
const Login = (props) => {
    const host = "http://localhost:5001/api";
    
    let navigate= useNavigate ();

    const handleLogin = async(e) => {
        e.preventDefault();
        const response = await fetch(`${host}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email:credentials.email,password:credentials.password }),

        });
        const loginRes=await response.json()
        if(loginRes.success){
            localStorage.setItem("auth-token",loginRes.data.authToken);
            props.showAlert("Login success","success");
            navigate("/");
        }else{
            props.showAlert("invalid credentials","danger");
        }
    }
    


    const [credentials, setCredentials] = useState({email:"",password:""});
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onchange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} onChange={onchange} name='password' />
                </div>

                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </div>
    )
}

export default Login