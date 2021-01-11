using System;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Invoices
{
    public class CreateProductInvoice
    {
        public class Command : IRequest
        {
            public int ProductId { get; set; }
            public int Quantity { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var product = await _context.Products.FindAsync(request.ProductId);
                if (product == null)
                    throw new RestException(HttpStatusCode.NotFound, new { product = "Not found" });

                var invoice = await _context.Invoices.ToListAsync();


                var productInvoice = new ProductInvoice
                {
                    Product = product,
                    Quantity = request.Quantity,
                    Invoice = invoice.Last()
                };
                invoice.Last().Sum = invoice.Last().Sum + request.Quantity * product.Price;

                // _context.InvoiceProducts.Add(productInvoice);
                invoice.Last().Products.Add(productInvoice);

                var success = await _context.SaveChangesAsync() > 0;
                //Ako je odg veci od 0 OK je
                if (success)
                    return Unit.Value;

                throw new Exception("Problem saving changes");

            }
        }
    }
}