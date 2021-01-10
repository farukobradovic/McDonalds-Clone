using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Invoices;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class InvoiceController : BaseController
    {
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpPost("prods")]
        public async Task<ActionResult<Unit>> CreateProductInvoice(CreateProductInvoice.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpGet]
        public async Task<ActionResult<List<Invoice>>> GetAll()
        {
            return await Mediator.Send(new GetAll.Querry());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Invoice>> Details(int id)
        {
            return await Mediator.Send(new Details.Querry { Id = id });
        }
    }
}