using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Persistence;

namespace Application.User
{
    public class CurrentUser
    {
        public class Querry : IRequest<User> { }
        public class Handler : IRequestHandler<Querry, User>
        {
            private readonly UserManager<AppUser> userManager;
            private readonly IJwtGenerator jwtGenerator;
            private readonly IUserAccessor userAccessor;

            public Handler(UserManager<AppUser> userManager, IJwtGenerator jwtGenerator, IUserAccessor userAccessor)
            {
                this.userManager = userManager;
                this.jwtGenerator = jwtGenerator;
                this.userAccessor = userAccessor;
            }

            public async Task<User> Handle(Querry request, CancellationToken cancellationToken)
            {
                //handler logic goes here
                var user = await userManager.FindByNameAsync(userAccessor.GetCurrentUsername());
                return new User
                {
                    Name = user.Name,
                    Lastname = user.Lastname,
                    Username = user.UserName,
                    Adress = user.Adress,
                    PhoneNumber = user.PhoneNumber,
                    Token = jwtGenerator.CreateToken(user)
                };
            }
        }
    }
}