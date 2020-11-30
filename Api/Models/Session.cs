
using System.Collections.Generic; 
using System; 
namespace Api.Models
{
    public class Session
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public string Category {get; set;}
        public DateTime StartTime {get; set;}
        public DateTime StopTime {get; set;}
        public double TotalTime{get; set;}
    }
}