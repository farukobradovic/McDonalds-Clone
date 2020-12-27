using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
    }
}