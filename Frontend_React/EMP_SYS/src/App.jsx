import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './Components/EmployeeList';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        {/* <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<UpdateEmployee />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
