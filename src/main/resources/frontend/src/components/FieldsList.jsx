import React from 'react';
import Field from './Field';
import {Table} from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import '../styles/FieldList.css'

const FieldList = ({ posts }) => {
    

    return (
        <div>
            <div className="tablehead">
                <a>Fields</a>
                <Button class="table__btn btn btn-primary">Add field</Button>
            </div>
        <Table striped bordered hover size="sm" >
        <thead> 
         <tr>
          <th className="th">Label</th>
          <th className="th">Type</th>
          <th className="th">Required</th>
          <th className="th">isActive</th>
       
         </tr>
        </thead>
        <tbody>
        {
          posts.map((post) =>
                <tr key ={post.id}>
                    <td id="td">{post.label}</td>
                    <td id="td">{post.type}</td>
                    <td id="td">{post.required ? 'true':'false'}</td>
                    <td id="td">{post.active ? 'true':'false'}</td>
                </tr>
            )}
         </tbody>
       </Table>
       </div>
    );
};

export default FieldList;