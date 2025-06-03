using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        private readonly EmpDAO _empDAO = new EmpDAO();

        [HttpGet]
        public IActionResult GetAll()
        {
            var employees = _empDAO.GetAllEmployees();
            return Ok(employees);
        }

        [HttpGet("Details/{id}")]
        public IActionResult GetById(string id)
        {
            var employee = _empDAO.GetEmployeeById(id);
            return Ok(employee);
        }

      

        [HttpPost("Update")]
        public IActionResult Update([FromBody] EmployeeModel emp)
        {
            _empDAO.UpdateEmployee(emp);
            return Ok();
        }

        [HttpPost("Delete/{id}")]
        public IActionResult Delete(string id)
        {
            _empDAO.DeleteEmployee(id);
            return Ok();
        }

        [HttpPost("Search")]
        public IActionResult Search([FromQuery] string searchTerm)
        {
            var result = _empDAO.SearchEmployees(searchTerm);
            return Ok(result);
        }
    }
}
