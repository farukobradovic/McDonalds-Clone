using Domain;

namespace Application.Products
{
    public class ProductDto
    {
        public int Id { get; set; }
        public Photo Photo { get; set; }
        public int PhotoId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
    }
}