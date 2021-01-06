using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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
        public double Fat { get; set; }
        public double Protein { get; set; }
        public double Carbohydrates { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        // [ForeignKey("CategoryId")]
        // public virtual Category Category { get; set; }
        // public int CategoryId { get; set; }

    }
}