namespace WebApplication1.Models
{
    public class EmployeeModel
    {
        public string EEID { get; set; }
        public string FullName { get; set; }
        public string JobTitle { get; set; }
        public string Department { get; set; }
        public string BusinessUnit { get; set; }
        public string Gender { get; set; }
        public string Ethnicity { get; set; }
        public int Age { get; set; }
        public DateTime HireDate { get; set; }
        public string AnnualSalary { get; set; }
        public string Bonus { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public DateTime? ExitDate { get; set; } // Nullable since it may not always have a value


        public EmployeeModel()
        {
            
        }
        public EmployeeModel(string eeid, string fullName, string jobTitle, string department,string businessUnit, string gender, string ethnicity, int age,
                DateTime hireDate, string annualSalary, string bonus,string country, string city, DateTime? exitDate = null)
        {
            EEID = eeid;
            FullName = fullName;
            JobTitle = jobTitle;
            Department = department;
            BusinessUnit = businessUnit;
            Gender = gender;
            Ethnicity = ethnicity;
            Age = age;
            HireDate = hireDate;
            AnnualSalary = annualSalary;
            Bonus = bonus;
            Country = country;
            City = city;
            ExitDate = exitDate;
        }










    }
}
