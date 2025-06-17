import React, { useEffect, useState } from 'react';
import { getEmployees } from '../Services/employeeService';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');



  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading employees...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900">Employee Directory</h2>
            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Employee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map(emp => (
            <div 
              key={emp.eeid}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="border-b border-gray-100 pb-4 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{emp.fullName}</h3>
                  <span className="text-sm text-gray-500">ID: {emp.eeid}</span>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Role:</span>
                    <span className="ml-2 text-gray-600">{emp.jobTitle}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Department:</span>
                    <span className="ml-2 text-gray-600">{emp.department}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-gray-700">Location:</span>
                    <span className="ml-2 text-gray-600">{emp.city}, {emp.country}</span>
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs font-medium text-gray-500">Hire Date</p>
                      <p className="text-sm text-gray-900">
                        {emp.hireDate ? new Date(emp.hireDate).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">Annual Salary</p>
                      <p className="text-sm text-gray-900">
                        ${emp.annualSalary?.toLocaleString()}
                      </p>
                    </div>
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