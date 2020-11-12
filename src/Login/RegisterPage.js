
import './login.css'
import { useState } from "react";
import Axios from "axios";

function RegisterPage() {

        const[studentidReg, setStudentidReg] = useState(0);
        const [usernameReg, setUsernameReg] = useState("");
        const [passwordReg, setPasswordReg] = useState("");
        
        const register = () => {
            Axios.post("http://localhost:3001/register", {
                studentid: studentidReg,
                username: usernameReg,
                password: passwordReg,
            }).then((response) => {
                console.log(response);
            });
        };
        

        return (
            <body>
    <div class="register">
        <h1>Register</h1>
        <div class="links">
            <a href="/login">Login</a>
            <a href="/register" class="active">Register</a>
        </div>
        <form action="/register" method="post" autocomplete="off">
            <label for="Student ID">
					<i class="fas fa-user"></i>
				</label>
            <input type="text" 
            name="studentid" 
            placeholder="Student ID" 
            id="studentid" 
            onChange={(event) => {
                setStudentidReg(event.target.value);
            }}
            required/>
            <label for="username">
					<i class="fas fa-user"></i>
				</label>
            <input type="text" 
            name="username" 
            placeholder="Username" 
            id="username" 
            onChange={(event) => {
                setUsernameReg(event.target.value);
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
                setPasswordReg(event.target.value);
            }} 
            required/>
            <label for="email">
					<i class="fas fa-envelope"></i>
				</label>
            <input type="email" name="email" placeholder="Email" id="email" required/>
            <div class="msg">MEssage</div>
            <input type="submit" value="Register" onClick={register}/>
        </form>
    </div>
</body>
         );
    
}


 
export default RegisterPage;