using System.Collections.Generic;
using System.Data.SQLite; 
using Api.Models.Interfaces;

namespace Api.Models
{
    public class ReadSessionData : IGetAllSessions, IGetSession
    {
        public List<Session> GetAllSessions()
        {
            string cs = @"URI=file:C:\source\repos\cgi-ajmerker\api\sessions0.db";
            using var con = new SQLiteConnection(cs); 
            con.Open(); 

            string stm = "SELECT * FROM sessions"; 
            using var cmd = new SQLiteCommand(stm, con); 

            using SQLiteDataReader rdr = cmd.ExecuteReader(); 

            List<Session> allSessions = new List<Session>();
            while (rdr.Read())
            {
                Session temp = new Session(){Id =rdr.GetInt32(0), Name =rdr.GetString(1), Category = rdr.GetString(2), StartTime = rdr.GetDateTime(3), StopTime = rdr.GetDateTime(4), TotalTime = rdr.GetDouble(5)};
                allSessions.Add(temp); 
            }
            return allSessions; 
        }

        public Session GetSession(int id)
        {
            string cs = @"URI=file:C:\source\repos\cgi-ajmerker\api\sessions0.db";
            using var con = new SQLiteConnection(cs); 
            con.Open(); 

            string stm = "SELECT * FROM sessions WHERE Id = @Id";
            using var cmd = new SQLiteCommand(stm, con); 
            cmd.Parameters.AddWithValue("@Id", id); 
            cmd.Prepare(); 
            using SQLiteDataReader rdr = cmd.ExecuteReader(); 

            rdr.Read(); 
            return new Session(){Id = rdr.GetInt32(0), Name = rdr.GetString(1), Category = rdr.GetString(2), StartTime = rdr.GetDateTime(3), StopTime = rdr.GetDateTime(4), TotalTime = rdr.GetDouble(5)}; 
        }

        
    }
}