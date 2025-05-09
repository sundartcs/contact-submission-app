using Microsoft.EntityFrameworkCore;
using UserContactSubmissionApi.Models;

namespace UserContactSubmissionApi.Data
{
    public class ContactsDbContext : DbContext
    {
        public ContactsDbContext(DbContextOptions<ContactsDbContext> options) : base(options) { }

        public DbSet<Contact> Contacts => Set<Contact>();
    }
}
