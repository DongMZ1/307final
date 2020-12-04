import "./App.css";
import { useState } from "react";
import Axios from "axios";


function Login() {

    const[studentidReg, setStudentidReg] = useState(0);
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [LoginStatus, setLoginStatus] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            studentid: studentidReg,
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };
    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message)
            }
            else{
                setLoginStatus(response.data[0].username)
            }
            console.log(response);
        });
    };
    return (
        <div className="register">
            <div className="registration">
                <h1>Registration</h1>
                <label>Student id:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setStudentidReg(event.target.value);
                    }}
                />
                <label>Username:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setUsernameReg(event.target.value);
                    }}
                />
                <label>Password:</label>
                <input
                    type="text"
                    onChange={(event) => {
                        setPasswordReg(event.target.value);
                    }}
                />

                <button onClick={register}>Register</button>
            </div>
            <div className="login">
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username..."
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Password..."
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                <button onClick={login}>Login</button>
            </div>
            <h1>{LoginStatus}</h1>
        </div>
    );
}

export default Login;