
import './login.css'
import { useState } from "react";
import Axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function LoginPage() {
        Aos.init();
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [LoginStatus, setLoginStatus] = useState("");
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
            <body>
                <div class="login">
                    <h1>Login</h1>
                    <div class="links">
                        <a href="/login" class="active">Login</a>
                        <a href="/register">Register</a>
                    </div>
                    <form action="/login" method="post">
                        <label for="username">
                            <i class="fas fa-user"></i>
                        </label>
                        <input type="text" 
                        name="username" 
                        placeholder="Username" 
                        id="username" 
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                        required/>
                            <label for="password">
                                <i class="fas fa-lock"></i>
                            </label>
                            <input type="password" 
                            name="password" 
                            placeholder="Password" 
                            id="password" 
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            required/>
                                <div class="msg">{LoginStatus}</div>
                                <input type="submit" value="Login" onClick={login}/>
                    </form>
                </div>
            </body>
         );
    
}


 
export default LoginPage;