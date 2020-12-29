using System.Linq;
using System.Security.Claims;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor httpUserAccessor;
        public UserAccessor(IHttpContextAccessor httpUserAccessor)
        {
            this.httpUserAccessor = httpUserAccessor;

        }

        public string GetCurrentUsername()
        {
            var username = httpUserAccessor.HttpContext.User?.Claims?.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            return username;
        }
    }
}