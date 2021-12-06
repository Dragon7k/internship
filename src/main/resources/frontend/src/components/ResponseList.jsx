import React from 'react';
import Field from './Field';
import { Table } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import '../styles/FieldList.css'

const ResponseList = ({ posts }) => {
    return (
        <Table striped bordered hover size="sm" >
            <thead>
                {
                    posts.map((post) =>
                        <tr key={post.id}>
                            <th id="td">{post.label}</th>
                        </tr>
                    )}

            </thead>
            <tbody>
                {
                    posts.map((post) =>
                        <tr key={post.id}>
                            <td id="td">{post.value}</td>
                        </tr>
                    )}
            </tbody>
        </Table>

    );
};

export default ResponseList;