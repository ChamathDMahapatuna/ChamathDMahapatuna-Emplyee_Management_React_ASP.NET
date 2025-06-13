import React, { useEffect, useState } from 'react';
import { getEmployees } from '../Services/employeeService';
import './EmployeeList.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredEmployees = employees.filter(emp =>
    emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading employees...</p>
      </div>
    );
  }

  return (
    <div className="employee-list-container">
      <div className="header-section">
        <h2>Employee Directory</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <div className="employee-grid">
          {filteredEmployees.map(emp => (
            <div className="employee-card" key={emp.eeid}>
              <div className="employee-header">
                <h3>{emp.fullName}</h3>
                <span className="employee-id">ID: {emp.eeid}</span>
              </div>
              <div className="employee-info">
                <p><strong>Role:</strong> {emp.jobTitle}</p>
                <p><strong>Department:</strong> {emp.department}</p>
                <p><strong>Location:</strong> {emp.city}, {emp.country}</p>
                <div className="employee-details">
                  <div>
                    <strong>Hire Date:</strong>
                    <span>{emp.hireDate ? new Date(emp.hireDate).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div>
                    <strong>Salary:</strong>
                    <span>${emp.annualSalary?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;