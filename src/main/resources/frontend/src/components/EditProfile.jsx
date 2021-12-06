import React, { useState } from "react";
import '../styles/EditProfile.css';
import { Button } from "react-bootstrap";

const EditProfile = () => {


    const changeInfo =(e)=>{
        
    }
    return (
        <form className="formSignUp">
            
            <h2 className="form_title">Edit Profile</h2>

            <div class="formInner">
                <input class="text input--active" id="First Name" placeholder="First Name" />
                <input class="text input--active" id="Last Name" placeholder="Last Name" />
                <input class="text input--active" type="email" id="email" placeholder="E-mail" />
                <input class="text input--active" id="number" placeholder="Phone Number" />
            </div>
            <Button onClick={changeInfo}className="formBtn">Save</Button>
           

        </form>
    );
};
export default EditProfile;