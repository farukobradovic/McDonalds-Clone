using System.Collections.Generic;
using Domain;

namespace Application.Products
{
    public class ProductDto
    {
        public int Id { get; set; }
        public virtual Photo Photo { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public double Fat { get; set; }
        public double Protein { get; set; }
        public double Carbohydrates { get; set; }
        public ICollection<CommentClient> Comments { get; set; }
    }
}