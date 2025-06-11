import React, { useEffect, useState } from 'react';
import { getEmployees } from './services/employeeService'; // adjust the path if needed

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading employees...</div>;
  }

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>EEID</th>
            <th>Full Name</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Business Unit</th>
            <th>Gender</th>
            <th>Ethnicity</th>
            <th>Age</th>
            <th>Hire Date</th>
            <th>Annual Salary</th>
            <th>Bonus</th>
            <th>Country</th>
            <th>City</th>
            <th>Exit Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees) && employees.map(emp => (
            <tr key={emp.eeid}>
              <td>{emp.eeid}</td>
              <td>{emp.fullName}</td>
              <td>{emp.jobTitle}</td>
              <td>{emp.department}</td>
              <td>{emp.businessUnit}</td>
              <td>{emp.gender}</td>
              <td>{emp.ethnicity}</td>
              <td>{emp.age}</td>
              <td>{emp.hireDate ? new Date(emp.hireDate).toLocaleDateString() : ''}</td>
              <td>{emp.annualSalary}</td>
              <td>{emp.bonus}</td>
              <td>{emp.country}</td>
              <td>{emp.city}</td>
              <td>{emp.exitDate ? new Date(emp.exitDate).toLocaleDateString() : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
