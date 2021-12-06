import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Field = (props) => {
    return (
        <div className="post">
            <div>{props.post.label}</div>
            <div>{props.post.type} </div>
            <div>{props.post.required}</div>
            <div>{props.post.isActive}</div>
        </div>);
};

export default Field;