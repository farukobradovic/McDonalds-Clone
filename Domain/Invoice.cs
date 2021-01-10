using System;
using System.Collections.Generic;

namespace Domain
{
    public class Invoice
    {
        public int Id { get; set; }
        public double Sum { get; set; }
        public DateTime CreatedAt { get; set; }
        public virtual AppUser Author { get; set; }
        public virtual ICollection<ProductInvoice> Products { get; set; }

    }
}