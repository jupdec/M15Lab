import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';
import EmployeeTable from './EmployeeTable.jsx';
import EmployeeRow from './EmployeeRow.jsx';

export default class EmployeeList extends React.Component {
    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <EmployeeFilter />
                <EmployeeTable>
                    <EmployeeRow />
                </EmployeeTable>
                <EmployeeAdd />
            </div>
        );
    }
}
