using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products
{
    public class List
    {
        public class Querry : IRequest<List<ProductDto>> { }
        public class Handler : IRequestHandler<Querry, List<ProductDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                this.mapper = mapper;
                _context = context;
            }

            public async Task<List<ProductDto>> Handle(Querry request, CancellationToken cancellationToken)
            {
                //handler logic goes here
                var products = await _context.Products.ToListAsync();

                // var productsToReturn = mapper.Map<List<Product>, List<ProductDto>>(products);
                // return productsToReturn;
                // return products;
                return mapper.Map<List<Product>, List<ProductDto>>(products);
            }
        }
    }
}