using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products
{
    public class Details
    {
        public class Querry : IRequest<Product>
        {

            public int Id { get; set; }
        }
        public class Handler : IRequestHandler<Querry, Product>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Product> Handle(Querry request, CancellationToken cancellationToken)
            {
                //handler logic goes here
                var product = await _context.Products.Include(c => c.Photo).SingleOrDefaultAsync(c => c.Id == request.Id);
                if (product == null)
                    throw new RestException(HttpStatusCode.NotFound, new { product = "Not found" });

                return product;
            }
        }
    }
}