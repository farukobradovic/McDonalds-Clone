using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Domain;
using MediatR;
using Persistence;

namespace Application.Invoices
{
    public class Details
    {
        public class Querry : IRequest<Invoice>
        {
            public int Id { get; set; }
        }
        public class Handler : IRequestHandler<Querry, Invoice>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Invoice> Handle(Querry request, CancellationToken cancellationToken)
            {
                //handler logic goes here
                var invoice = await _context.Invoices.FindAsync(request.Id);
                if (invoice == null)
                    throw new RestException(HttpStatusCode.NotFound, new { invoice = "Not found" });

                return invoice;
            }
        }
    }
}