using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products
{
    public class Details
    {
        public class Querry : IRequest<ProductDto>
        {

            public int Id { get; set; }
        }
        public class Handler : IRequestHandler<Querry, ProductDto>
        {
            private readonly DataContext _context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.mapper = mapper;
                _context = context;
            }

            public async Task<ProductDto> Handle(Querry request, CancellationToken cancellationToken)
            {
                //handler logic goes here
                var product = await _context.Products.SingleOrDefaultAsync(c => c.Id == request.Id);
                if (product == null)
                    throw new RestException(HttpStatusCode.NotFound, new { product = "Not found" });

                // return product;

                var toReturn = mapper.Map<Product, ProductDto>(product);

                return toReturn;

            }
        }
    }
}