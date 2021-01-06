using System;

namespace Domain
{
    public class Comment
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public DateTime CreatedAt { get; set; }
        public virtual AppUser Author { get; set; }
        public virtual Product Product { get; set; }
    }
}