using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products
{
    public class ListByCategories
    {
        public class Querry : IRequest<List<Category>> { }
        public class Handler : IRequestHandler<Querry, List<Category>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Category>> Handle(Querry request, CancellationToken cancellationToken)
            {
                //handler logic goes here
                var productsByCategories = await _context.Categories.ToListAsync();
                return productsByCategories;

            }
        }
    }
}