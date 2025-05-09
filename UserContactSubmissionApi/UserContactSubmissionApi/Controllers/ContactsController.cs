using Microsoft.AspNetCore.Mvc;
using UserContactSubmissionApi.Data;
using UserContactSubmissionApi.Models;

namespace UserContactSubmissionApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly ContactsDbContext _context;
        public ContactsController(ContactsDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Create(Contact contact)
        {
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();
            return Ok(contact);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Contacts.ToList());
        }
    }
}
