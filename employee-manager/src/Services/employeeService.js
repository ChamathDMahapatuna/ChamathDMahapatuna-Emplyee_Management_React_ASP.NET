// src/services/employeeService.js
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
