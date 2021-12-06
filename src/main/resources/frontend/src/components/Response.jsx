import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Response = (props) => {
    return (
        <div className="post">
            <div>{props.post.field}</div>
            <div>{props.post.label} </div>
        </div>);
};

export default Response;