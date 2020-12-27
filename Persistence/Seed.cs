using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Categories.Any())
            {
                var categories = new List<Category>{
                    new Category{
                        Name = "Sendviči",
                        Products = new List<Product>{
                     new Product{
                        Name = "Big Mac",
                        Description ="Sočan sendvič s 2 kosana odreska od 100% goveđeg mesa u finom pecivu posutom sezamom, s izvrsnim topljenim sirom, kiselim krastavcima, sitno sjeckanim lukom i jedinstvenim Big Mac TM sosom.",
                        Price= 8,
                        Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609098027/big-mac_fjgd5k.png"
                        },

                    },
                    new Product{
                        Name = "Tasty Burger",
                        Description ="Sočan sendvič s kosanim odreskom od 100% goveđeg mesa i ukusnim Tasty sosom",
                        Price = 5,
                        Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609098054/tasty-burger_i3fevs.png"
                        }
                    }
                        }
                    },
                     new Category{
                        Name = "Chicken McNuggets"
                    }
                    , new Category{
                        Name = "McWrap"
                    }
                    , new Category{
                        Name = "Deserti"
                    }
                    , new Category{
                        Name = "Pića"
                    }
                    , new Category{
                        Name = "Salate"
                    },
                    new Category{
                        Name = "Prilozi i umaci"
                    }
                };


                await context.Categories.AddRangeAsync(categories);
                await context.SaveChangesAsync();
            }
        }

    }
}