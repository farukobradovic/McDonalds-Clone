using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Product
    {
        public int Id { get; set; }

        [ForeignKey("PhotoId")]
        public Photo Photo { get; set; }
        public int PhotoId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }

    }
}