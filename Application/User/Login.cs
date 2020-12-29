using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Domain;
using Application.Errors;
using System.Net;
using Application.Interfaces;

namespace Application.User
{
    public class Login
    {
        public class Querry : IRequest<User>
        {

            public string Email { get; set; }
            public string Password { get; set; }


        }

        public class QueryValidator : AbstractValidator<Querry>
        {

            public QueryValidator()
            {
                RuleFor(c => c.Email).NotEmpty();
                RuleFor(c => c.Password).NotEmpty();
            }
        }
        public class Handler : IRequestHandler<Querry, User>
        {
            // private readonly DataContext _context;
            private readonly UserManager<AppUser> userManager;
            private readonly SignInManager<AppUser> signInManager;
            private readonly IJwtGenerator jwtGenerator;

            public Handler(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IJwtGenerator jwtGenerator)
            {
                this.jwtGenerator = jwtGenerator;
                this.userManager = userManager;
                this.signInManager = signInManager;
            }

            public async Task<User> Handle(Querry request, CancellationToken cancellationToken)
            {
                //handler logic goes here
                var user = await userManager.FindByEmailAsync(request.Email);
                if (user == null)
                    throw new RestException(HttpStatusCode.Unauthorized);

                var result = await signInManager.CheckPasswordSignInAsync(user, request.Password, false);

                if (result.Succeeded)
                {
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

                throw new RestException(HttpStatusCode.Unauthorized);

            }
        }
    }
}