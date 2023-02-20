import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import validator from 'validator';
import "../css/Employees.css";

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(data => setEmployees(data.data))
    }, []);

    const addEmployee = (event) => {
        event.preventDefault();
        const id = event.target.id.value;
        const first_name = event.target.first_name.value;
        const last_name = event.target.last_name.value;
        const email = event.target.email.value;
        const avatar = event.target.avatar.value;

        if (!validator.isInt(id)) {
            alert("Invalid ID number!");
            return;
        }
        if (!validator.isAlpha(first_name, 'en-US') || !validator.isAlpha(last_name, 'en-US')) {
            alert("Invalid name!");
            return;
        }
        if (!validator.isEmail(email)) {
            alert("Invalid email address!");
            return;
        }
        if (!validator.isURL(avatar)) {
            alert("Invalid avatar URL!");
            return;
        }

        setEmployees([...employees, { id, first_name, last_name, email, avatar }]);
        localStorage.setItem("employees", JSON.stringify([...employees, { id, first_name, last_name, email, avatar }]));
    };

    const deleteEmployee = (index) => {
        if (window.confirm("Are you sure?")) {
            setEmployees(employees.filter((employee, i) => i !== index));
            localStorage.setItem("employees", JSON.stringify(employees.filter((employee, i) => i !== index)));
        }
    }


    return (
        <div className="container">
            <h2 className="mb-4">Employees</h2>
            <Table className="table table-hover table-bordered table-sortable">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th id="avatar" scope="col">Avatar</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees
                        .map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.first_name} {employee.last_name}</td>
                                <td>{employee.email}</td>
                                <td><img src={employee.avatar} className="form-control" alt="Avatar" /></td>
                                <td>
                                    <Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button>
                                </td>
                            </tr>))}
                </tbody>
            </Table>
            <form className="form" onSubmit={addEmployee}>
                <tr key="event" className="input-row">
                    <td><input type="text" placeholder="ID" className="form-control" name="id" /></td>
                    <td><input type="text" placeholder="First name" className="form-control" name="first_name" /></td>
                    <td><input type="text" placeholder="Last name" className="form-control" name="last_name" /></td>
                    <td><input type="email" placeholder="Email" className="form-control" name="email" /></td>
                    <td><input type="text" placeholder="Avatar image link" className="form-control" name="avatar" /></td>
                    <td><Button type="submit" variant="primary">Add</Button></td>
                </tr>
            </form>
        </div>
    )
}

export default Employees;