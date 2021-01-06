using System;

namespace Application.Products
{
    public class CommentClient
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Username { get; set; }

    }
}