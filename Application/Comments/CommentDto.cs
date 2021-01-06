using System;

namespace Application.Comments
{
    public class CommentDto
    {
        public string Id { get; set; }
        public string Body { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Username { get; set; }
    }
}