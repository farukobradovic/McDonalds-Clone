using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Adress { get; set; }

    }
}