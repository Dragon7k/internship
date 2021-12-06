import React from 'react';
import '../styles/select.css'
import { Dropdown, DropdownButton } from 'react-bootstrap'
const Select = () => {

  return (

    <DropdownButton classname="dropdownButton" variant="none" id="dropdown-basic-button" title="Login">
      <Dropdown.Item href="/edit_profile">Edit Profile</Dropdown.Item>
      <Dropdown.Item href="/change_pass">Change Password</Dropdown.Item>
      <Dropdown.Item href="/signin">Log Out</Dropdown.Item>
    </DropdownButton>

  );
};

export default Select;