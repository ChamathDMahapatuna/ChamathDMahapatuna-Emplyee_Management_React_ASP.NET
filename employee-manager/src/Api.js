import axios from 'axios';

const API_URL = 'https://localhost:5001'; // Adjust port if different

export const getAllEmployees = () => axios.get(`${API_URL}/Employee`);
export const getEmployeeById = (id) => axios.get(`${API_URL}/Employee/Details/${id}`);
export const addEmployee = (employee) => axios.post(`${API_URL}/Employee/Create`, employee);
export const updateEmployee = (employee) => axios.post(`${API_URL}/Employee/Update`, employee);
export const deleteEmployee = (id) => axios.post(`${API_URL}/Employee/Delete/${id}`);
export const searchEmployees = (searchTerm) =>
  axios.post(`${API_URL}/Employee/Search`, null, {
    params: { searchTerm }
  });
