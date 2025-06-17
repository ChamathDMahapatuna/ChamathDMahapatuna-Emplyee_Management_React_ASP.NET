import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees } from '../services/employeeService';

function EmployeeList() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getEmployees();
        console.log("Data fetched:", data);
        setEmployees(data.slice(0, 10)); // Temporary slice
      } catch (error) {
        console.error("Failed to fetch:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filter logic
  const filteredEmployees = employees.filter(emp =>
    emp.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading employees...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Employee Directory</h2>
              <p className="mt-2 text-sm text-gray-600">Manage and view all employees in your organization</p>
            </div>
            <div className="w-full sm:w-auto relative">
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-[300px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Employee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map(emp => (
            <div 
              key={emp.eeid}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Edit Button - Shows on Hover */}
              <div className="absolute inset-0 bg-indigo-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl">
                <button
                  onClick={() => navigate(`/update-employee/${emp.eeid}`)}
                  className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-indigo-700"
                >
                  Edit
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center border-b border-gray-100 pb-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-lg">
                    {emp.fullName.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{emp.fullName}</h3>
                    <span className="text-sm text-gray-500">ID: {emp.eeid}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-gray-700">{emp.jobTitle}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-600">{emp.department}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{emp.city}, {emp.country}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-gray-100">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-medium text-gray-500">Hire Date</p>
                      <p className="text-sm font-medium text-gray-900">
                        {emp.hireDate ? new Date(emp.hireDate).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-medium text-gray-500">Annual Salary</p>
                      <p className="text-sm font-medium text-gray-900">
                        ${emp.annualSalary?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEmployees.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="mt-4 text-gray-900 font-medium">No employees found</p>
            <p className="mt-2 text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
