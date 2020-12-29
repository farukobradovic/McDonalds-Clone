using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Products;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProductsController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Product>>> List()
        {
            return await Mediator.Send(new List.Querry());
        }
        [HttpGet("bycategory")]
        public async Task<ActionResult<List<Category>>> ListByCategories()
        {
            return await Mediator.Send(new ListByCategories.Querry());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Details(int id)
        {
            return await Mediator.Send(new Details.Querry { Id = id });
        }
    }
}