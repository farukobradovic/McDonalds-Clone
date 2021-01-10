using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<ProductInvoice> InvoiceProducts { get; set; }
        public DbSet<Invoice> Invoices { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //dotnet ef migrations add "UserActivityAdded" -p Persistence/ -s API/
            //Kreiranje migracije 

            builder.Entity<ProductInvoice>(c => c.HasKey(ua => new { ua.ProductId, ua.InvoiceId }));


            base.OnModelCreating(builder);


        }


    }
}