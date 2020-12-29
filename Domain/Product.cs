using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Product
    {
        public int Id { get; set; }

        [ForeignKey("PhotoId")]
        public virtual Photo Photo { get; set; }
        public int PhotoId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }

        // [ForeignKey("CategoryId")]
        // public virtual Category Category { get; set; }
        // public int CategoryId { get; set; }

    }
}