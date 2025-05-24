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

       

       
        public void UpdateEmployee(EmployeeModel emp)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string query = @"UPDATE mytable SET 
                         [Full Name] = @FullName,
                         [Job Title] = @JobTitle,
                         Department = @Department,
                         [Business Unit] = @BusinessUnit,
                         Gender = @Gender,
                         Ethnicity = @Ethnicity,
                         Age = @Age,
                         [Hire Date] = @HireDate,
                         [Annual Salary] = @AnnualSalary,
                         [Bonus ] = @Bonus,
                         Country = @Country,
                         City = @City,
                         [Exit Date] = @ExitDate
                         WHERE EEID = @EEID";

                SqlCommand cmd = new SqlCommand(query, conn);

                // Parameters
                cmd.Parameters.AddWithValue("@EEID", emp.EEID);
                cmd.Parameters.AddWithValue("@FullName", emp.FullName);
                cmd.Parameters.AddWithValue("@JobTitle", emp.JobTitle);
                cmd.Parameters.AddWithValue("@Department", emp.Department);
                cmd.Parameters.AddWithValue("@BusinessUnit", emp.BusinessUnit);
                cmd.Parameters.AddWithValue("@Gender", emp.Gender);
                cmd.Parameters.AddWithValue("@Ethnicity", emp.Ethnicity);
                cmd.Parameters.AddWithValue("@Age", emp.Age);
                cmd.Parameters.AddWithValue("@HireDate", emp.HireDate);
                cmd.Parameters.AddWithValue("@AnnualSalary", emp.AnnualSalary);
                cmd.Parameters.AddWithValue("@Bonus", emp.Bonus);
                cmd.Parameters.AddWithValue("@Country", emp.Country);
                cmd.Parameters.AddWithValue("@City", emp.City);
                cmd.Parameters.AddWithValue("@ExitDate", emp.ExitDate ?? (object)DBNull.Value);

                // Execute
                conn.Open();
                cmd.ExecuteNonQuery();
            }
        }

        public void DeleteEmployee (String id)
        {
            using(SqlConnection con = new SqlConnection(connectionString)){
                String query = @"DELETE FROM mytable WHERE EEID = @EEID";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@EEID", id);
                con.Open();
                cmd.ExecuteNonQuery();

            }

        }







    }
}
