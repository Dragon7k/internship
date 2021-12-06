import React from "react";
import '../styles/SignUp.css';
import { Button } from "react-bootstrap";
import UserService from "../services/UserService";
import { useState } from 'react';
const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setNumber] = useState('');
    

    const addNewUser = (e) => {
      //  if (password === secondPassword) {
             const newUser = {
                email,
                password,
                firstName,
                lastName,
                phoneNumber
            }
            console.log(newUser);
            addUserInDataBase(newUser);
           
            

     //} else {
     //      alert('password is not equals')
     //   }

        
    }

    async function addUserInDataBase(user) {
        await UserService.addUser(user);
        alert('all OK')
    }

    return (
        <form className="formSignUp">
            <h2 className="formLogo">LOGOTYPE</h2>
            <h3 className="form_title">Sign Up</h3>

            <div class="formInner">
                <input class="text input--active" type="email" id="email" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input class="text input--active" type="password" id="password" placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <input class="text input--active" type="password" id="confirm_password" placeholder="Confirm password"
                    value={secondPassword}
                    onChange={e => setSecondPassword(e.target.value)} />
                <input class="text input--active" id="First Name" placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} />
                <input class="text input--active" id="Last Name" placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} />
                <input class="text input--active" id="number" placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>
            <Button onClick={addNewUser} href="/login" className="formBtn">Log in</Button>
            <div className="formLinks2">
                <span className="formSpan">Dont't have an account</span>
                <a className="formLink1" href="/">Sign up</a>
            </div>

        </form>
    );
};
export default SignUp;