using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.User
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string Name { get; set; }
            public string Lastname { get; set; }
            public string Username { get; set; }
            public string Adress { get; set; }
            public string PhoneNumber { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(c => c.Name).NotEmpty();
                RuleFor(c => c.Lastname).NotEmpty();
                RuleFor(c => c.Username).NotEmpty();
                RuleFor(c => c.Adress).NotEmpty();
                RuleFor(c => c.PhoneNumber).NotEmpty();
                RuleFor(c => c.Email).NotEmpty();
                RuleFor(c => c.Password).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly DataContext _context;
            private readonly UserManager<AppUser> userManager;
            private readonly IJwtGenerator jwtGenerator;
            public Handler(DataContext context, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
                this.jwtGenerator = jwtGenerator;
                this.userManager = userManager;
                _context = context;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if (await _context.Users.AnyAsync(c => c.Email == request.Email))
                {
                    throw new RestException(HttpStatusCode.BadRequest, new { Email = "Email already exists" });
                }
                if (await _context.Users.AnyAsync(c => c.UserName == request.Username))
                {
                    throw new RestException(HttpStatusCode.BadRequest, new { UserName = "Username already exists" });
                }

                var user = new AppUser
                {
                    Name = request.Name,
                    Lastname = request.Lastname,
                    UserName = request.Username,
                    Adress = request.Adress,
                    PhoneNumber = request.PhoneNumber,
                    Email = request.Email
                };

                var result = await userManager.CreateAsync(user, request.Password);

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

                throw new Exception("Problem saving changes");

            }
        }
    }
}
