using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Invoices
{
    public class GetAll
    {
         public class Querry : IRequest<List<Invoice>> { }
                public class Handler : IRequestHandler<Querry, List<Invoice>>
                {
                    private readonly DataContext _context;
                    private readonly IUserAccessor userAccessor;
        
                    public Handler(DataContext context, IUserAccessor userAccessor)
                    {
                         this.userAccessor = userAccessor;
                        _context = context;
                    }
        
                    public async Task<List<Invoice>> Handle(Querry request, CancellationToken cancellationToken)
                    {
                         //handler logic goes here
                         var user = await _context.Users.SingleOrDefaultAsync(c => c.UserName == userAccessor.GetCurrentUsername());
                        if(user == null)
                        throw new RestException(HttpStatusCode.NotFound, new {user = "Not found"});

                        var invoices = await _context.Invoices.Where(c => c.Author.Id == user.Id).ToListAsync();

                        return invoices;
                        
                    }
                }
    }
}