import React from 'react';

export default function EmployeeRow(props) {
    // Your implementation for EmployeeRow component
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.role}</td>
        </tr>
    );
}
