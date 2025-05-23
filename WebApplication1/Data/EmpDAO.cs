using System.Data.SqlTypes;
using WebApplication1.Models;

using System.Data.SqlClient;

namespace WebApplication1.Data

{
    public class EmpDAO
    {
        private string connectionString = @"Data Source=CHAMSTER\SQLEXPRESS;Initial Catalog=EmployeeDB;Integrated Security=True";

        // READ ALL
        public List<EmployeeModel> GetAllEmployees()
        {
            List<EmployeeModel> list = new List<EmployeeModel>();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string query = "SELECT * FROM mytable";
                SqlCommand cmd = new SqlCommand(query, conn);
                conn.Open();

                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    list.Add(new EmployeeModel
                    {
                        EEID = reader["EEID"].ToString(),
                        FullName = reader["Full Name"].ToString(),
                        JobTitle = reader["Job Title"].ToString(),
                        Department = reader["Department"].ToString(),
                        BusinessUnit = reader["Business Unit"].ToString(),
                        Gender = reader["Gender"].ToString(),
                        Ethnicity = reader["Ethnicity"].ToString(),
                        Age = Convert.ToInt32(reader["Age"]),
                        HireDate = Convert.ToDateTime(reader["Hire Date"]),
                        AnnualSalary = reader["Annual Salary"].ToString(),
                        Bonus = reader["Bonus "].ToString(),
                        Country = reader["Country"].ToString(),
                        City = reader["City"].ToString(),
                        ExitDate = reader["Exit Date"] == DBNull.Value ? null : (DateTime?)reader["Exit Date"]
                    });
                }

                reader.Close();
            }

            return list;
        }




    }
}
