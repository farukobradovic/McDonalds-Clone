using System.Collections;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Domain
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}