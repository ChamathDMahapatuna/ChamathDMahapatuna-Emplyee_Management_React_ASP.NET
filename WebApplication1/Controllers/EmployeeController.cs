using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            List<EmployeeModel> Employee = new List<EmployeeModel>();

            EmpDAO empDAO = new EmpDAO();
            Employee = empDAO.GetAllEmployees();
            return View("Index",Employee);
        }
    }
}
