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
                        Products = new List<Product>
                        {
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
                    },
                      new Product{
                        Name = "Hamburger",
                        Description ="Sočan sendvič s kosanim odreskom od 100% goveđeg mesa u finom pecivu, kojem poseban okus daju svjetski poznat McDonald’sov kečap, malo sosa sa senfom, sitno sjeckani luk i kiseli krastavci.",
                        Price = 4,
                        Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167844/hamburger_vedp0u.png"
                        }
                    },
                    new Product{
                        Name = "Cheesburger",
                        Description ="Sočan sendvič s kosanim odreskom od 100% goveđeg mesa u finom pecivu te kriškom izvrsnog topljenog sira, svjetski poznatim McDonald’s kečapom, sitno sjeckanim lukom, kiselim krastavcima i senfom.",
                        Price = 5,
                        Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167825/cheesburger_qxvugd.png"
                        }
                    },
                      new Product{
                        Name = "Dupli Cheesburger",
                        Description ="Sočan sendvič s 2 kosana odreska od 100% goveđeg mesa u finom pecivu te kriškom izvrsnog topljenog sira, svjetski poznatim McDonald’s kečapom, sitno sjeckanim lukom, kiselim krastavcima i senfom.",
                        Price = 4,
                        Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167824/dupli-cheesburger_gch9xv.png"
                        }
                    },
                      new Product{
                        Name = "Hamburger Royal",
                        Description ="Veliki sočni kosani odrezak od 100% goveđeg mesa uz dvije kriške finog topljenog sira, kisele krastavce, svježi luk, kečap, senf i pecivo Royal sa sezamovim sjemenkama, kraljevski zaokružuje bogati okus ovog sendviča.",
                        Price = 7,
                        Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167844/hamburger-royal_qrtu2g.png"
                        }
                    },
                      new Product{
                        Name = "McChicken",
                        Description ="McChicken osvaja ukusnim paniranim kosanim odreskom od pilećih prsa, svježom i hrskavom salatom i sočnim McChicken sosom u finom pecivu.",
                        Price = 5,
                        Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167891/mcchicken_ipagyk.png"
                        }
                    },
                      new Product{
                        Name = "Filet-o-Filet",
                        Description ="Pohovani riblji odrezak od Hoki ribe iz sjevernih mora, s kriškom ukusnog topljenog sira i sočnim tartar sosom u finom pecivu.",
                        Price = 3,
                        Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167844/filetofilet_pu2nzj.png"
                        }
                    },
                      new Product{
                        Name = "Grand Big mac",
                        Description ="Najpoznatiji svjetski sendvič u našim restoranima, isti – ali drugačiji. Provjerite mit o Big Mac sendviču i to u 40 posto većem izdanju.",
                        Price = 4,
                        Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167843/grandbigmac_p98ze0.png"
                        }
                    }
                     }
                    },
                     new Category{
                        Name = "Chicken McNuggets",
                        Products = new List<Product>
                        {
                            new Product{
                            Name = "Chicken McNuggets 4",
                            Description ="Jednostavno neodoljivi kosani panirani pileći medaljoni od pilećih prsa, pripremljeni u 100% biljnom ulju od sunckoreta i uljane repice, izvrstan su gurmanski odabir i lagani obrok. Uz mali pomfrit i multivitamin sok. Probajte i druge kombinacije priloga i pića!",
                            Price = 4,
                            Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167891/mcnuggets4_dq5szi.png"
                         }
                        },
                           new Product{
                            Name = "Chicken McNuggets 6",
                            Description ="Jednostavno neodoljivi kosani panirani pileći medaljoni od pilećih prsa, pripremljeni u 100% biljnom ulju od sunckoreta i uljane repice, izvrstan su gurmanski odabir i lagani obrok.",
                            Price = 5,
                            Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167906/mcnuggets6_ybbxow.png"
                         }
                        },
                           new Product{
                            Name = "Chicken McNuggets 9",
                            Description ="Jednostavno neodoljivi kosani panirani pileći medaljoni od pilećih prsa, pripremljeni u 100% biljnom ulju od sunckoreta i uljane repice, izvrstan su gurmanski odabir i lagani obrok.",
                            Price = 6,
                            Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167906/mcnuggets9_kyrlum.png"
                         }
                        },
                           new Product{
                            Name = "Chicken Wings",
                            Description ="Uživajte u savršenom okusu piletine.",
                            Price = 4.5,
                            Photo = new Photo{
                            Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167891/mcnuggets4_dq5szi.png"
                         }
                        }

                        }
                    }
                    , new Category{
                        Name = "McWrap",
                        Products = new List<Product>
                        {
                            new Product{
                                Name = "McWrap Crispy Chicken",
                                Description = "Tortilja s paniranim kosanim odreskom od mesa pilećih prsa, svježom salatom i rukolom, paradajzom, sirom i dvije vrste sosa.",
                                Price = 2.5,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167908/mcwrap2_w5e5yw.png"
                                }
                            },
                             new Product{
                                Name = "McWrap Classic Beef",
                                Description = "Tortilja s goveđim mesom, hrskavom Iceberg salatom, Cheddar sirom, rukolom i Sour cream sosom.",
                                Price = 2.5,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167906/mcwrap1_d9y9wd.png"
                                }
                            }
                        }
                    }
                    , new Category{
                        Name = "Deserti",
                         Products = new List<Product>
                        {
                            new Product{
                                Name = "McSundae Deluxe Karamela",
                                Description = "Nevjerovatna kombinacija mliječnog sladoleda i karamele.",
                                Price = 3,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167843/karamela_ton3yw.png"
                                }
                            },
                             new Product{
                                Name = "McSundae Deluxe Jagoda",
                                Description = "McDonald’s vam predstavlja sladoled nevjerovatnog okusa koji će očarati vaša čula.",
                                Price = 2.5,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167846/jagoda_giq0y9.png"
                                }
                            },
                             new Product{
                                Name = "McSundae Deluxe Čokoloada",
                                Description = "McDonald’s vam predstavlja sladoled nevjerovatnog okusa koji će očarati vaša čula..",
                                Price = 2.5,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167823/cokolada_d0vuzo.png"
                                }
                            }
                        }
                    }
                    , new Category{
                        Name = "Pića",
                         Products = new List<Product>
                        {
                            new Product{
                                Name = "Coca-Cola 0,5l",
                                Description = "Coca-Cola je najpoznatije osvježavajuće piće na svijetu koje vole ljudi svih uzrasta. Odaberite između 3 ponuđene veličine: 0,25l (malo), 0,40l (srednje) ili 0,50l (veliko).",
                                Price = 3.5,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167823/cola05_dertss.png"
                                }
                            },
                             new Product{
                                Name = "Coca-Cola 0,25l",
                                Description = "Coca-Cola je najpoznatije osvježavajuće piće na svijetu koje vole ljudi svih uzrasta. Odaberite između 3 ponuđene veličine: 0,25l (malo), 0,40l (srednje) ili 0,50l (veliko).",
                                Price = 2,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167823/cola025_ssmqkr.png"
                                }
                            }
                        }
                    }
                    , new Category{
                        Name = "Salate",
                         Products = new List<Product>
                        {
                            new Product{
                                Name = "Mala Salata",
                                Description = "Svježe pripremljena kombinacija kristal i romana salate, crvenog radiča, mrkve, paradajza i krastavaca, uz koju sami birate salatni preljev po vlastitom ukusu. Uživajte u vrhunskoj kvaliteti i odličnom okusu naših svježih salata!",
                                Price = 5,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167892/malasalata_tycb9c.png"
                                }
                            }
                        }
                    },
                    new Category{
                        Name = "Prilozi i umaci",
                           Products = new List<Product>
                        {
                            new Product{
                                Name = "Pomfrit Veliki",
                                Description = "Naš se poznati pomfrit reže iz najkvalitetnijih cijelih krompira posebne duguljaste sorte Russet Burbank, uzgojenih ekskluzivno za McDonald’s. McDonald’sov pomfrit svjetski je poznat upravo zbog vrhunske kvalitete sirovina te visokog standarda pripreme.",
                                Price = 4.5,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167923/pomfritveliki_ycjx76.png"
                                }
                            },
                             new Product{
                                Name = "Pomfrit Mali",
                                Description = "Naš se poznati pomfrit reže iz najkvalitetnijih cijelih krompira posebne duguljaste sorte Russet Burbank, uzgojenih ekskluzivno za McDonald’s. McDonald’sov pomfrit svjetski je poznat upravo zbog vrhunske kvalitete sirovina te visokog standarda pripreme.",
                                Price = 2.5,
                                Photo = new Photo{
                                    Url = "https://res.cloudinary.com/rukfash/image/upload/v1609167921/pomfritmali_yi2wqt.png"
                                }
                            }
                        }
                    }
                };


                await context.Categories.AddRangeAsync(categories);
                await context.SaveChangesAsync();
            }
        }

    }
}