using AutoMapper;
using Domain;

namespace Application.Products
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>()
             .ForMember(c => c.Comments, o => o.MapFrom(s => s.Comments));
            CreateMap<Comment, CommentClient>()
            .ForMember(c => c.Username, o => o.MapFrom(s => s.Author.UserName))
            .ForMember(c => c.Id, o => o.MapFrom(s => s.Id))
            .ForMember(c => c.CreatedAt, o => o.MapFrom(s => s.CreatedAt))
            .ForMember(c => c.Body, o => o.MapFrom(s => s.Body));
        }
    }
}