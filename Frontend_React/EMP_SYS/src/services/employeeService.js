import axios from 'axios';

const API_URL = 'https://localhost:44380/api/values';

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error; // Let the caller handle the error
  }
};

export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error; // Let the caller handle the error
  }
};

export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    throw error;
  }
};


