// import React, { useEffect, useState } from 'react';
// import { getAllEmployees } from '../Api';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     getAllEmployees().then((res) => {
//       setEmployees(res.data);
//     });
//   }, []);

//   return (
//     <div>
//       <h2>Employees</h2>
//       <ul>
//         {employees.map(emp => (
//           <li key={emp.eeid}>
//             {emp.fullName} - {emp.jobTitle}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default EmployeeList;
