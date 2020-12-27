using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products
{
    public class List
    {
        public class Querry : IRequest<List<Product>> { }
        public class Handler : IRequestHandler<Querry, List<Product>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Product>> Handle(Querry request, CancellationToken cancellationToken)
            {
                //handler logic goes here
                var products = await _context.Products.Include(c => c.Photo).ToListAsync();
                return products;
            }
        }
    }
}