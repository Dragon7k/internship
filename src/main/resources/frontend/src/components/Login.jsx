import React, { useState } from "react";
import '../styles/Login.css';
import { Button } from "react-bootstrap";
import CheckBox from "./CheckBox";
import UserService from "../services/UserService";
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');

    const checkUser = (e) => {
        console.log(currentPassword);
        getUserPass();
        password === currentPassword ? alert('all Ok') : alert('not ok')
    }

    async function getUserPass() {
        const response = await UserService.getUserPass(email);
        setCurrentPassword(response.data)

    }

    return (

        <form className="formLogin">
            <h2 className="formLogo">LOGOTYPE</h2>
            <h3 className="form_title">Log in</h3>

            <div class="formInner">
                <input class="text input--active" type="email" id="email" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input class="text input--active" type="password" id="password" placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="formLinks">
                <CheckBox value={'Remember me'} />
                <a className="formLink" href="/">Forgot your Password</a>
            </div>

            <Button onClick={checkUser} className="formBtn" >Log in</Button>

            <div className="formLinks2">
                <span className="formSpan">Dont't have an account</span>
                <a className="formLink1" href="/signUp">Sign up</a>
            </div>

        </form>

    );
};
export default Login;