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
        // GET: Update
        public ActionResult Update(String id)
        {
            EmpDAO empDAO = new EmpDAO();
            EmployeeModel employee = empDAO.GetEmployeeById(id);
            return View(employee); // Pre-fill form with data
        }

        // POST: Update
        [HttpPost]
        public ActionResult Update(EmployeeModel employee)
        {
            if (ModelState.IsValid)
            {
                EmpDAO empDAO = new EmpDAO();
                empDAO.UpdateEmployee(employee);
                return RedirectToAction("Details", new { id = employee.EEID });
            }

            return View(employee); // Show form again if validation fails
        }

        // GET: /Employee/Delete/5
        public ActionResult Delete(String id)
        {
            EmpDAO empDAO = new EmpDAO();
            EmployeeModel employee = empDAO.GetEmployeeById(id);
            return View(employee);
        }

        // POST: /Employee/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            EmpDAO empDAO = new EmpDAO();
            empDAO.DeleteEmployee(id);
            return RedirectToAction("Index");
        }


    }
}
