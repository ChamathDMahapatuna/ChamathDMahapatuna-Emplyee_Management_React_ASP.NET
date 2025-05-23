using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class EmployeeController : Controller
    {
        public ActionResult Index()
        {
            List<EmployeeModel> Employee = new List<EmployeeModel>();

            EmpDAO empDAO = new EmpDAO();
            Employee = empDAO.GetAllEmployees();
            return View("Index",Employee);
        }
        public ActionResult Details(String Id)
        {
            EmpDAO empDAO = new EmpDAO();   
            EmployeeModel Employee = empDAO.GetEmployeeById(Id);
        
            return View("Details", Employee);
        }
        [HttpGet]
        public ActionResult Create()
        {
            return View("Create"); 

        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(EmployeeModel employee)
        {
            if (ModelState.IsValid)
            {
                EmpDAO empDAO = new EmpDAO();
                empDAO.AddEmployee(employee);
               
                return RedirectToAction("Details", new { id = employee.EEID });
            }

            return View(employee); 
        }


    }
}
