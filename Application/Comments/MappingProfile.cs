using System;
using Domain;
using AutoMapper;

namespace Application.Comments
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Comment, CommentDto>()
            .ForMember(c => c.Username, o => o.MapFrom(s => s.Author.UserName));
        }
    }
}