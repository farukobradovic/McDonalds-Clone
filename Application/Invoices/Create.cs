using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Persistence;

namespace Application.Invoices
{
    public class Create
    {
        public class Command : IRequest
        {

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _context = context;
                this.userAccessor = userAccessor;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {



                var user = await _context.Users.SingleOrDefaultAsync(c => c.UserName == userAccessor.GetCurrentUsername());
                if (user == null)
                    throw new RestException(System.Net.HttpStatusCode.NotFound, new { user = "Not found" });

                var invoice = new Invoice
                {

                    Author = user,
                    CreatedAt = DateTime.Now

                };

                // var sum = 0;
                // foreach (var i in request.ProductInvoices)
                // {
                //     sum += i.Quantity;
                // }
                // invoice.Sum = sum;
                // List<ProductInvoice> prods = new List<ProductInvoice>();
                // foreach (var p in request.ProductInvoices)
                // {
                //     prods.Add(new ProductInvoice
                //     {
                //         ProductId = p.ProductId,
                //         Quantity = p.Quantity
                //     });
                // }
                // invoice.Products = prods;

                _context.Invoices.Add(invoice);

                var success = await _context.SaveChangesAsync() > 0;
                //Ako je odg veci od 0 OK je
                if (success)
                    return Unit.Value;

                throw new Exception("Problem saving changes");

            }
        }
    }
}