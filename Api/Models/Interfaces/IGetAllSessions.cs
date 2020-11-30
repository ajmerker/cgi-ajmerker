using System.Collections.Generic; 
namespace Api.Models.Interfaces
{
    public interface IGetAllSessions
    {
         List<Session> GetAllSessions(); 
    }
}